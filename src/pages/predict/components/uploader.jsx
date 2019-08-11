import React from 'react';
import { connect } from 'react-redux';
import { Upload, Icon, message } from 'antd';
import styles from '../index.scss';

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
    // eslint-disable-next-line no-console
    console.log(info);
    if (info.file.status === 'uploading') {
      this.setState({ loading: true });
      return;
    }
    if (info.file.status === 'done') {
      // Get this url from response in real world.
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
    // const { imageUrl } = this.state;

    return (
      <Upload
        name="fileToUpload"
        listType="picture-card"
        className={styles.uploader}
        showUploadList={{ showRemoveIcon: false }}
        beforeUpload={beforeUpload}
        action="https://api.sypht.com/fileupload"
        headers={{
          Authorization: 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6Ik1FVTBOalpGTmpNM1FqTXpOek00TURWR1JFTTJNREk1TXpFeFJUazVNVGxEUkRZMk1rRkJPUSJ9.eyJodHRwczovL2FwaS5zeXBodC5jb20vY29tcGFueUlkIjoiZTMyOGU3YjAtYTJkZC00ZGJlLTg1NjItMGQzNTA5OGVhNjhmIiwiaXNzIjoiaHR0cHM6Ly9sb2dpbi5zeXBodC5jb20vIiwic3ViIjoidFhQNmVWZTRRT2NpRXQ1SzFUb1E5RVZHM25KcEdTRFhAY2xpZW50cyIsImF1ZCI6Imh0dHBzOi8vYXBpLnN5cGh0LmNvbSIsImlhdCI6MTU2NTQzNzE5MCwiZXhwIjoxNTY1NTIzNTkwLCJhenAiOiJ0WFA2ZVZlNFFPY2lFdDVLMVRvUTlFVkczbkpwR1NEWCIsInNjb3BlIjoicmVzdWx0OmFsbCBmaWxldXBsb2FkOmFsbCBhZG1pbmlzdHJhdGlvbjpjb21wYW55IiwiZ3R5IjoiY2xpZW50LWNyZWRlbnRpYWxzIn0.UWIQ_ZotnDcJWT-9dl9sahd73KK3s7K0vt-8yzKMTVIGmY4S3fbNe6jGwFpRM3Rjj9yMwqKOgZDg9siyvH5AHOjhXBPd9C62AJgjBVr9nPBxIaF7xlPDXNvZdsmEpinreCOJ-2KnI0qd80wyimYUsLnOtGocpibrTsDT6J6Kt_eqImgxu9F_CKEWdY-iZrlS_d0jAUh8aUvrd8Jz3TTVI8v--NWlKFvZJ87UFHnHlbrHxVp1SJL5Bt6i8l37LvvJF6eeaR1wXuWBjHhet-qjlfCM8gajspYhl2duzZOcqvjY93oLCa37D9uyQjXSoQmTqQUbbpI3pmPQHm--3yqxfg',
        }}
        onChange={this.handleChange}
      >
        {uploadButton}
        {/* {imageUrl ?
        <img src={imageUrl} alt="document" style={{ width: '100%' }} /> : uploadButton} */}
      </Upload>
    );
  }
}

// const mapStateToProps = () => ({});

export default connect(null, null)(Uploader);
