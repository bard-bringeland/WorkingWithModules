import {getSessions} from './js/sessionsRepository';
import {sessionsTemlate} from './js/template'

// (function() {


      
      function render() {
        var list = document.querySelector('#sessions');
        if (!list) return;
        list.innerHTML = sessionTemplate(data.listItems);
      };
      
      
      var data = {
        listItems: []
      };
      
      getSessions()
        .then((sessions)=>{
          console.log('promises!')
          data.listItems = sessions;
          render();
        });
      
      
// export default 
//}())
