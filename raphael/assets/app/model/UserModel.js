/****************************************************************************
 * File Name: UserModel.js
 * Class Name: UserModel
 * Purpose: store data about the individual users
 * Creation Date: 05/09/11
 * Created By: Cormac McGuire
 * 
 *
 * Updated By:
 * Update Date:
 * Description:
 ****************************************************************************/
(function( User, window, document, undefined ){
  
  var myUserModel = Backbone.Model.extend({
    initialize: function(){
    },

    validate: function( attrs ){
      var error = '';
      //Validate username
      if( typeof( attrs.username ) !== 'string'  ){
        error += 'must be a string';
      }

      //Validate sex field
      if( attrs.sex !== 'Male' && attrs.sex !== 'Female' ){
        error += 'must be either Male or Female';
      }

      //Validate age field
      if( typeof( attrs.age) !== 'number'  ){
        error += 'must be a number';
      }
      if(error !== ''){
        //alert( error );//uncomment this line for debug
        return error;
      }
    },
  });
  

  User.UserModel = new myUserModel();
})( Ruabone.module( 'user' ) );

