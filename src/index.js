import React from 'react';
import ReactDOM from 'react-dom';
import './index.module.css';
import App from './App';
import AuthService from './service/auth_service';
import ImgUploader from './service/img_uploader';
import ImgInput from './components/imginput/ImgInput';
import CardRepo from './service/card_repo';

const authService = new AuthService();
const cardRepo = new CardRepo();
const imgUploader = new ImgUploader();
const FileInput = props => <ImgInput {...props} imgUploader={imgUploader} />;

ReactDOM.render(
  <React.StrictMode>
    <App authService={authService} FileInput={FileInput} cardRepo={cardRepo} />
  </React.StrictMode>,
  document.getElementById('root')
);
