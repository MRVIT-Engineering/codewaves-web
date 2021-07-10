import { observer } from 'mobx-react-lite';

import { withLoading } from '../../components/hoc/withLoading';
import LoginForm from '../../components/login/LoginForm';

const LoginScreen = () => <LoginForm />;

export default withLoading(observer(LoginScreen));
