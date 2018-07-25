import React from 'react'
global.React = React

import expect from 'expect'
global.expect = expect

import sinon from 'sinon'
global.sinon = sinon
global.sandbox = sinon.createSandbox()

import { mount, render, shallow } from 'enzyme'
global.mount = mount
global.render = render
global.shallow = shallow

require.extensions['.svg'] = () => {}
