import ListView from './ListView'
//import ListItem from '../components/ListItem'
import bus from '../utils/bus.js'

export default function createListView(component_name) {
  return {
    //reusable components 
    name: `${component_name}`,
    created() {
      bus.$emit('start:spinner');
      setTimeout(() => {
        this.$store.dispatch('FETCH_LIST', this.$route.name)
        .then(() => {
          
          bus.$emit('end:spinner')
          
        })
        .catch((err) => {
          console.log(err);
        }) 
      }, 1500)
    },

    render(createElement) {
      return createElement(ListView);
      //return createElement(ListItem);
    }
  }
}