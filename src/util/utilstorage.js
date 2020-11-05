export default {
  SAVE_TODOS(value){
    window.localStorage.setItem('Todos_key',JSON.stringify(value))
  },
  READ_TODOS(){
    return JSON.parse(window.localStorage.getItem('Todos_key') || '[]')
  }
}