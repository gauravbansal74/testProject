'use strict';

angular.module('redmartApp').service('contactService', function() {

		this.contacts = [{
              id: 1,
              name : 'Terrence S. Hatfield',
              pic:'1.jpg',
              tel: '651-603-1723',
              email: 'TerrenceSHatfield@rhyta.com'
            },
            {
              id: 2,
              name : 'Chris M. Manning',
              pic:'2.jpg',
              tel: '513-307-5859',
              email: 'ChrisMManning@dayrep.com'
            },
            {
              id: 3,
              name : 'Ricky M. Digiacomo',
              pic:'3.jpg',
              tel: '918-774-0199',
              email: 'RickyMDigiacomo@teleworm.us'
            },
            {
              id: 4,
              name : 'Michael K. Bayne',
              pic:'4.jpg',
              tel: '702-989-5145',
              email: 'MichaelKBayne@rhyta.com'
            },
            {
              id: 5,
              name : 'John I. Wilson',
              pic:'5.jpg',
              tel: '318-292-6700',
              email: 'JohnIWilson@dayrep.com'
            },
            {
              id: 6,
              name : 'Rodolfo P. Robinett',
              pic:'6.jpg',
              tel: '803-557-9815',
              email: 'RodolfoPRobinett@jourrapide.com'
            }];        

		this.saveContact = function(data){
        if(data.index){
          this.contacts[data.index] = data;
        }else{
          this.contacts.push(data);
        }
    };

		this.removeContact = function(id){
			this.contacts.splice(id, 1);
		};

	
});