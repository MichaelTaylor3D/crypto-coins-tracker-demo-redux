import React from 'react';
import { configure, shallow }  from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import sinon from "sinon";
import { expect } from 'chai';

import { AppComponent as App } from './App';
import IndeterminateProgressOverlay from './lib/components/IndeterminateProgressOverlay';
import GlobalMsg from './lib/components/GlobalMsg';

configure({ adapter: new Adapter() });

describe('App.js', () => {
  let props;

  beforeEach(() => {
    // Default Props
    props = {
      globalProgress: false,
      globalMsg: 'TEST_MESSAGE',
      setGlobalMsgAction: sinon.stub(),
      feed: [],
      currencySelection: 'USD',
      setCurrencyAction: sinon.stub(),
      getAppFeedAction: sinon.stub()
    };
  });

  it('renders global progress overlay if the state is set to true', () => {
    props.globalProgress = true;
    const wrapper = shallow(<App {...props} />);

    expect(wrapper.contains(<IndeterminateProgressOverlay />)).to.be.true;
  });

  it('does not render the global progress overlay if the state is set to false', () => {
    props.globalProgress = false;
    const wrapper = shallow(<App {...props} />);

    expect(wrapper.contains(<IndeterminateProgressOverlay />)).to.be.false;
  });

  it('sets the global message', () => {
    const wrapper = shallow(<App {...props} />);
    const component = wrapper.find(GlobalMsg);

    expect(component.length).to.equal(1);
    expect(component.props().globalMsg).to.equal(props.globalMsg);
  });
});
