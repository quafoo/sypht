import React from 'react';
import { connect } from 'react-redux';
import { Upload, Icon, message } from 'antd';
import styles from '../index.scss';
import { actionCreators } from '../store';

function getBase64(img, callback) {
  const reader = new FileReader();
  reader.addEventListener('load', () => callback(reader.result));
  reader.readAsDataURL(img);
}

function beforeUpload(file) {
  const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
  if (!isJpgOrPng) {
    message.error('You can only upload JPG/PNG file!');
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error('Image must smaller than 2MB!');
  }
  return isJpgOrPng && isLt2M;
}

class Uploader extends React.Component {
  state = { loading: false }

  handleChange = (info) => {
    if (info.file.status === 'uploading') {
      this.props.changeShowPreview(false);
      this.setState({ loading: true });
      return;
    }
    if (info.file.status === 'done') {
      // Get this url from response in real world.
      this.props.changeShowPreview(true);
      this.props.getResults(info.file.response.fileId, this.props.selectedAccessToken);
      getBase64(info.file.originFileObj, () => this.setState({ loading: false }));
    }
  }

  render() {
    const uploadButton = (
      <div>
        <Icon type={this.state.loading ? 'loading' : 'plus'} />
        <div className="ant-upload-text">Upload a document</div>
      </div>
    );
    const { selectedAccessToken, selectedFieldSet } = this.props;

    return (
      <Upload
        name="fileToUpload"
        listType="picture-card"
        className={styles.uploader}
        showUploadList={{ showRemoveIcon: false }}
        beforeUpload={beforeUpload}
        action="https://api.sypht.com/fileupload"
        headers={{
          Authorization: `Bearer ${selectedAccessToken}`,
        }}
        data={{ fieldSet: selectedFieldSet }}
        onChange={this.handleChange}
      >
        {uploadButton}
      </Upload>
    );
  }
}

const mapStateToProps = state => ({
  selectedAccessToken: state.getIn(['predict', 'selectedAccessToken']),
  selectedFieldSet: state.getIn(['predict', 'selectedFieldSet']),
});

const mapDispatchToProps = dispatch => ({
  changeShowPreview(showPreview) {
    dispatch(actionCreators.changeShowPreviewAction(showPreview));
  },
  getResults(fileId, selectedAccessToken) {
    dispatch(actionCreators.getResultsAction(fileId, selectedAccessToken));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Uploader);
