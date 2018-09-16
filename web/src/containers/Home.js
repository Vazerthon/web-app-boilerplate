import { connectWithLifecycle } from 'react-lifecycle-component';
import Home from '../components/Home';

import { actions } from '../state/actions/app';

const mapStateToProps = ({ app }) => ({
  message: app.message,
});

const mapDispatchToProps = dispatch => ({
  componentDidMount: () => dispatch(actions.loadMessage()),
});

const AppRootContainer = connectWithLifecycle(
  mapStateToProps,
  mapDispatchToProps,
)(Home);

export default AppRootContainer;
