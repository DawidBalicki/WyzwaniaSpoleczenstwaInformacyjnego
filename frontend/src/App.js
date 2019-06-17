import React from 'react';
import './App.css';
import 'antd/dist/antd.css';
import {Row, Col, Input, Button, Checkbox, message} from 'antd';
import {sendText} from './ListFunction'


const successMessage = () => {
  message.success('Audio created');
};

const errorMessage = () => {
  message.error('Problem occurred during creating audio');
};


class  App extends React.Component{

    constructor() {
        super();
        this.state = {
            in1: '', in2: '', in3: '', in4: '', in5: '', in6: '', in7: '', in8: '', in9: '', in10: '',
            in11: '', in12: '', in13: '', in14: '', in15: '', in16: '', in17: '', in18: '', in19: '', in20: '',
            in21: '', in22: '', in23: '', in24: '', in25: '', in26: '', in27: '', in28: '', in29: '', in30: '',
            in31: '', in32: '', in33: '', in34: '', in35: '', in36: '', in37: '', in38: '', in39: '', in40: '',
            in41: '', in42: '', in43: '', in44: '', in45: '',
            text: '',
            inverse: false};
    }

    onChange = e => {
        this.setState( {[e.target.name]: e.target.value + ' '},
            () => {
            this.setState({
                text: this.state.in1 + this.state.in2 + this.state.in3 + this.state.in4 + this.state.in5 + this.state.in6
                    + this.state.in7 + this.state.in8 + this.state.in9 + this.state.in10 + this.state.in11 + this.state.in12 + this.state.in13
                    + this.state.in14 + this.state.in15 + this.state.in16 + this.state.in17 + this.state.in18 + this.state.in19 + this.state.in20
                    + this.state.in21 + this.state.in22 + this.state.in23 + this.state.in24 + this.state.in25 + this.state.in26 + this.state.in27
                    + this.state.in28 + this.state.in29 + this.state.in30 + this.state.in31 + this.state.in32 + this.state.in33 + this.state.in34
                    + this.state.in35 + this.state.in36 + this.state.in37 + this.state.in38 + this.state.in39 + this.state.in40 + this.state.in41
                    + this.state.in42 + this.state.in43 + this.state.in44 + this.state.in45}
                    );
            })
        }

        onChangeCheckBox = e => {
        this.setState({inverse:e.target.checked},() => {console.log(e.target.checked)} )
    };

    onClick = () => {
        sendText(this.state.text, this.state.inverse)
            .then(resp => {
                resp==200 ? successMessage() : errorMessage();
            });
        }

    render() {

        return (

              <div className="margin">
                  <Row>
                      <Col span={3}> <img src={require('./images/1.png')} className="image"/> <Input name="in1" onChange={this.onChange} id="1" className="input"/> </Col>
                      <Col span={3}> <img src={require('./images/2.png')} className="image"/> <Input name="in2" onChange={this.onChange} id="2" className="input"/> </Col>
                      <Col span={3}> <img src={require('./images/3.png')} className="image"/> <Input name="in3" onChange={this.onChange} id="3" className="input"/> </Col>
                      <Col span={3}> <img src={require('./images/4.png')} className="image"/> <Input name="in4" onChange={this.onChange} id="4" className="input"/> </Col>
                      <Col span={3}> <img src={require('./images/5.png')} className="image"/> <Input name="in5" onChange={this.onChange} id="5" className="input"/> </Col>
                      <Col span={3}> <img src={require('./images/6.png')} className="image"/> <Input name="in6" onChange={this.onChange} id="6" className="input"/> </Col>
                      <Col span={3}> <img src={require('./images/7.png')} className="image"/> <Input name="in7" onChange={this.onChange} id="7" className="input"/> </Col>
                      <Col span={3}> <img src={require('./images/8.png')} className="image"/> <Input name="in8" onChange={this.onChange} id="8" className="input"/> </Col>
                  </Row>

                  <Row>
                      <Col span={3}> <img src={require('./images/9.png')} className="image"/> <Input name="in9" onChange={this.onChange} id="9" className="input"/> </Col>
                      <Col span={3}> <img src={require('./images/10.png')} className="image"/> <Input name="in10" onChange={this.onChange} id="10" className="input"/> </Col>
                      <Col span={3}> <img src={require('./images/11.png')} className="image"/> <Input name="in11" onChange={this.onChange} id="11" className="input"/> </Col>
                      <Col span={3}> <img src={require('./images/12.png')} className="image"/> <Input name="in12" onChange={this.onChange} id="12" className="input"/> </Col>
                      <Col span={3}> <img src={require('./images/13.png')} className="image"/> <Input name="in13" onChange={this.onChange} id="13" className="input"/> </Col>
                      <Col span={3}> <img src={require('./images/14.png')} className="image"/> <Input name="in14" onChange={this.onChange} id="14" className="input"/> </Col>
                      <Col span={3}> <img src={require('./images/15.png')} className="image"/> <Input name="in15" onChange={this.onChange} id="15" className="input"/> </Col>
                      <Col span={3}> <img src={require('./images/16.png')} className="image"/> <Input name="in16" onChange={this.onChange} id="16" className="input"/> </Col>
                  </Row>

                  <Row>
                      <Col span={3}> <img src={require('./images/17.png')} className="image"/> <Input name="in17" onChange={this.onChange} id="17" className="input"/> </Col>
                      <Col span={3}> <img src={require('./images/18.png')} className="image"/> <Input name="in18" onChange={this.onChange} id="18" className="input"/> </Col>
                      <Col span={3}> <img src={require('./images/19.png')} className="image"/> <Input name="in19" onChange={this.onChange} id="19" className="input"/> </Col>
                      <Col span={3}> <img src={require('./images/20.png')} className="image"/> <Input name="in20" onChange={this.onChange} id="20" className="input"/> </Col>
                      <Col span={3}> <img src={require('./images/21.png')} className="image"/> <Input name="in21" onChange={this.onChange} id="21" className="input"/> </Col>
                      <Col span={3}> <img src={require('./images/22.png')} className="image"/> <Input name="in22" onChange={this.onChange} id="22" className="input"/> </Col>
                      <Col span={3}> <img src={require('./images/23.png')} className="image"/> <Input name="in23" onChange={this.onChange} id="23" className="input"/> </Col>
                      <Col span={3}> <img src={require('./images/24.png')} className="image"/> <Input name="in24" onChange={this.onChange} id="24" className="input"/> </Col>
                  </Row>

                  <Row>
                      <Col span={3}> <img src={require('./images/25.png')} className="image"/> <Input name="in25" onChange={this.onChange} id="25" className="input"/> </Col>
                      <Col span={3}> <img src={require('./images/26.png')} className="image"/> <Input name="in26" onChange={this.onChange} id="26" className="input"/> </Col>
                      <Col span={3}> <img src={require('./images/27.png')} className="image"/> <Input name="in27" onChange={this.onChange} id="27" className="input"/> </Col>
                      <Col span={3}> <img src={require('./images/28.png')} className="image"/> <Input name="in28" onChange={this.onChange} id="28" className="input"/> </Col>
                      <Col span={3}> <img src={require('./images/29.png')} className="image"/> <Input name="in29" onChange={this.onChange} id="29" className="input"/> </Col>
                      <Col span={3}> <img src={require('./images/30.png')} className="image"/> <Input name="in30" onChange={this.onChange} id="30" className="input"/> </Col>
                      <Col span={3}> <img src={require('./images/31.png')} className="image"/> <Input name="in31" onChange={this.onChange} id="31" className="input"/> </Col>
                      <Col span={3}> <img src={require('./images/32.png')} className="image"/> <Input name="in32" onChange={this.onChange} id="32" className="input"/> </Col>
                  </Row>

                  <Row>
                      <Col span={3}> <img src={require('./images/33.png')} className="image"/> <Input name="in33" onChange={this.onChange} id="33" className="input"/> </Col>
                      <Col span={3}> <img src={require('./images/34.png')} className="image"/> <Input name="in34" onChange={this.onChange} id="34" className="input"/> </Col>
                      <Col span={3}> <img src={require('./images/35.png')} className="image"/> <Input name="in35" onChange={this.onChange} id="35" className="input"/> </Col>
                      <Col span={3}> <img src={require('./images/36.png')} className="image"/> <Input name="in36" onChange={this.onChange} id="36" className="input"/> </Col>
                      <Col span={3}> <img src={require('./images/37.png')} className="image"/> <Input name="in37" onChange={this.onChange} id="37" className="input"/> </Col>
                      <Col span={3}> <img src={require('./images/38.png')} className="image"/> <Input name="in38" onChange={this.onChange} id="38" className="input"/> </Col>
                      <Col span={3}> <img src={require('./images/39.png')} className="image"/> <Input name="in39" onChange={this.onChange} id="39" className="input"/> </Col>
                      <Col span={3}> <img src={require('./images/40.png')} className="image"/> <Input name="in40" onChange={this.onChange} id="40" className="input"/></Col>
                  </Row>

                  <Row>
                      <Col span={3}> <img src={require('./images/41.png')} className="image"/> <Input name="in41" onChange={this.onChange} id="41" className="input"/> </Col>
                      <Col span={3}> <img src={require('./images/42.png')} className="image"/> <Input name="in42" onChange={this.onChange} id="42" className="input"/></Col>
                      <Col span={3}> <img src={require('./images/43.png')} className="image"/> <Input name="in43" onChange={this.onChange} id="43" className="input"/> </Col>
                      <Col span={3}> <img src={require('./images/44.png')} className="image"/> <Input name="in44" onChange={this.onChange} id="44" className="input"/> </Col>
                      <Col span={3}> <img src={require('./images/45.png')} className="image"/> <Input name="in45" onChange={this.onChange} id="45" className="input"/> </Col>
                  </Row>

                  <div className="button-group">
                      <Button onClick={this.onClick} type="primary" shape="round" size={"large"} className="button-create">Create audio</Button>
                      <a href="/music" download>
                          <Button style={{marginLeft: 10}} type="primary" shape="round" size={"large"} className="button-create">Download audio</Button>
                      </a>
                      <Checkbox checked={this.state.inverse} onChange={this.onChangeCheckBox} style={{marginLeft: 10}} className="checkbox">inverse</Checkbox>
                  </div>

                {  /*  <audio ref="audio" id="audio" preload="auto" controls="controls" className='player'>
                      <source id="source" src="http://localhost:5000/music"/>
                  </audio>  */}

              </div>
            );
        }
}

export default App;
