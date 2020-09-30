import React from 'react';
import Button from './button';

const ButtonPanel = () => (
  <div className="button-collection">
    <div className="button-group">
      <Button name="AC" color='colors' />
      <Button name="+/-" color='colors' />
      <Button name="%" color='colors' />
      <Button name="÷" />
    </div>
    <div className="button-group">
      <Button name="7" color='colors' />
      <Button name="8" color='colors' />
      <Button name="9" color='colors' />
      <Button name="X" />
    </div>
    <div className="button-group">
      <Button name="4" color='colors' />
      <Button name="5" color='colors' />
      <Button name="6" color='colors' />
      <Button name="-" />
    </div>
    <div className="button-group">
      <Button name="1" color='colors' />
      <Button name="2" color='colors' />
      <Button name="3" color='colors' />
      <Button name="+" />
    </div>
    <div className="button-group last-btns">
      <Button name="0" color='colors' />
      <Button name="." color='colors' />
      <Button name="=" />
    </div>
  </div>
);
export default ButtonPanel;
