//Author: Tumi
import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

class DropdownMenu extends Component {
   constructor(props) { 
     super(props);
     this.state = {value: '' };

     this.handleChange = this.handleChange.bind(this);
     this.handleSubmit = this.handleSubmit.bind(this);
   }

   handleChange(event) {
     this.setState({value: event.target.value});
   }

   handleSubmit(event) { 
      alert('Select Initial Language: ' + this.state.value)
     event.preventDefault();

      alert('Select Language To Learn: ' + this.state.value)
         event.preventDefault();
   }

   render() {
     return (
      <Text style={styles.languages}>
       <form onSubmit={this.handleSubmit}> 
          <View style={styles.container}>
            <label>
               Select Initial Language: 
               <select value={this.state.value} onChange={this.handleChange}>
                  <option value="English">English</option>
                  <option value="Spanish">Spanish</option>
                  <option value="French">French</option>
                  <option value="German">German</option>
               </select>
            </label>
         </View>
         <input type="submit" value="Submit" />
      </form>

      <form onSubmit={this.handleSubmit}> 
         <View style={styles.container2}>
            <label>
               Select Language To Learn: 
               <select value={this.state.value} onChange={this.handleChange}>
                  <option value="English2">English</option>
                  <option value="Spanish2">Spanish</option>
                  <option value="French2">French</option>
                  <option value="German2">German</option>
               </select>
            </label>
         </View>
         <input type="submit" value="Submit" />
      </form>
   </Text>
     );
   }
 }

 const styles = StyleSheet.create({
   languages: {
      color: 'white',
      fontSize: 30,
      fontWeight: 'bold',
    },
    container: {
      width: '100%',
      borderColor: 'rgb(33, 33, 33)',
      borderWidth: 1, 
      padding: 30,
      backgroundColor: 'rgb(51, 51, 51)'
    },
    container2: {
      width: '100%',
      borderColor: 'rgb(33, 33, 33)',
      borderWidth: 1, 
      padding: 30,
      backgroundColor: 'rgb(51, 51, 51)'
    }
 });
export default DropdownMenu; 
