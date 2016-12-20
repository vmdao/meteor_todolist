import HomeContainer from './containers/HomeContainer';
import { mount } from 'react-mounter';
FlowRouter.route('/', {
    action() {
        mount(HomeContainer);
    }
})