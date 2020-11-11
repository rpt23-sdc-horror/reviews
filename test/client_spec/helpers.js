/* eslint-disable object-curly-newline */
import expect from 'chai';
import { mount, render, shallow, configure } from 'enzyme';
import { before, after, beforeEach, afterEach } from 'mocha';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

global.before = before;
global.after = after;
global.afterEach = afterEach;
global.beforeEach = beforeEach;
global.expect = expect;
global.mount = mount;
global.render = render;
global.shallow = shallow;
