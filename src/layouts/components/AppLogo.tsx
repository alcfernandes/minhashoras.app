import { Image } from 'antd';
import logo from '@assets/images/logo_transparent_background.png';

function AppLogo() {
  return (
    <div style={{ height: '50px', margin: '16px', textAlign: 'center' }}>
      <Image width={170} src={logo} alt="logo" preview={false} />
    </div>
  );
}

export default AppLogo;
