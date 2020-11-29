import React, { Component } from 'react';
import { View, TextInput, Button } from 'react-native';

class Form extends Component{

    static defaultProps = {
        onAdd: () => {}
    }

    state = {
        text: ''
    }

    add = () => {
        const {state} = this;
        if(state.text){
            this.props.onAdd(state.text);
            this.handleChange('');
        }
    }

    handleChange = (text) => {
        this.setState({text});
    }

    render(){
        const { state } = this;
        return (
            <View>
                <TextInput 
                multiline={true}
                numberOfLines = {3}
                placeholder="Informa a tarefa"
                value={state.text} 
                style={{borderColor:'gray',borderWidth:1,marginBottom:10,padding:5}}
                onChangeText={this.handleChange} />
                <Button 
                    title="Adicionar"
                    color="green"
                    onPress={this.add}
                />
            </View>
        );
    }
}

export default Form;