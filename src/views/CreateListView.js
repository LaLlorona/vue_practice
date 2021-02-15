import ListView from './ListView.js'

export default function createListView(component_name) {
  return {
    //reusable components 
    name: component_name,
    created() {
      
    },

    render(createElement) {
      return createElement(ListView);
    }
  }
}