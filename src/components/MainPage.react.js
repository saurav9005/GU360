/**
 * @providesModule HomePage.react
 */
'use strict';
import React from 'React';
import {Animated, Image, View, VrButton, Text} from 'react-360';


class MainPage extends React.Component {

    getInitialState: function () {
    return {
      activeIndex: this.props.activeIndex || 0
    };
  },

  render: function () {
    var self = this;
    var cx = React.addons.classSet;
    var tabNodes = _.map(this.props.children, function (child, index) {
      var className = cx({'active': self.state.activeIndex === index});
      return (
        <VrButton onClick={self._handleClick.bind(null, index)}>
          <Text className={className}>{child.props.display}</Text>
        </VrButton>
      );
    });

    var contentNodes = _.map(this.props.children, function (child, index) {
      if(self.state.activeIndex === index) {
        return (
          <View className="TabPane">
            {child.props.children}
          </div>
        );
      }
    });

    return (
      <View className="TabbedArea">
        <View className="Tab clearfix">
          {tabNodes}
        </View>
        <View>
          {contentNodes}
        </View>
      </div>
    );
  },

  _handleClick: function (index) {
    this.setState({
      activeIndex: index
    });
  }
};

class TabPane extends React.Component {
    render: function () {
    var active = this.props.active || false;
    if (active) {
      return this.props.children;
    } else {
      return null;
    }
  }
}

const styles = StyleSheet.create({
TabbedArea {
  margin: 30px auto;
  width: 80%;
  font-family: sans-serif;
  color: #555;
  font-size: 14px;
  line-height: 24px;
},
.Tabindex {
  display: block;
  text-align: center;
  text-decoration: none;
  text-transform: uppercase;
  color: #888;
  padding: 10px 0;
  border-bottom: 2px solid #888;
  background: #f7f7f7;
},
.TabPane {
  padding: 30px;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.3);
},
.clearfix:after {
  content: "";
  display: table;
  clear: both;
}
})