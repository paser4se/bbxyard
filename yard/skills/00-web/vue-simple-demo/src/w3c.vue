
<template>
  <div id="app">
    <h1 v-if="showWelcome">{{ msg }}</h1>
    <input v-model="msg" @keyup.enter.space.k="submit" placeholder="edit me">
    <ol>
      <li v-for="todo in todos">{{todo.text}}@{{todo.dateEnd}}</li>
    </ol>
    <ul>
      <li v-for="todo in todos">{{todo.text}}@{{todo.dateEnd}}</li>
    </ul>
    <table>
      <tr><th>content</th><th>date</th></tr>
    </table>
    <button type="button" v-on:click="btnSwitchShow">switch-show</button>
    <button type="button" @click="say('Hi')">Say Hi</button>
    <button type="button" @click="say('Hallo', $event)">Say Hallo</button>
    <div id="range" class="demo">
      <span v-for="n in 10">{{ n }} </span>
    </div>
    <div v-for="(key, val) in me"> {{key}}-{{val}}</div>
    <hr>
    <h2>Form Study</h2>
    <div class="form-demo">
      <!-- checkbox -->
      <div id="checkbox-demo">
        <input type="checkbox" id="checkbox" v-model="checked" />
        <label for="checkbox">{{checked}}</label>
      </div>
      <div id="checkbox-mult-demo">
        <input type="checkbox" id="name" :value="me.name" v-model="checkedme">
        <label for="name">{{me.name}}</label>
        <input type="checkbox" id="age" :value="me.age" v-model="checkedme">
        <label for="age">{{me.age}}</label>
        <input type="checkbox" id="gender" :value="me.gender" v-model="checkedme">
        <label for="gender">{{me.gender}}</label>
        <br />
        <span>Your info is: {{checkedme}}</span>
      </div>
      <!-- radio -->
      <div id="radio-demo">
        <input type="radio" id="1st" value="1st" v-model="picked">
        <label for="1st">1st</label>
        <input type="radio" id="2nd" value="2nd" v-model="picked">
        <label for="2nd">2nd</label>
        <br />
        <span>Picked: {{ picked }}</span>
      </div>
      <!-- select -->
      <div id="select-demo">
        <select class="select" name="select" v-model="selected" style="width: 50px">
          <option selected>A</option>
          <option>B</option>
          <option>C</option>
        </select>
        <span>Selected: {{selected}}</span>
      </div>
      <div id="select-mult-demo">
        <select class="select" name="select-mult" multiple v-model="selectedMe" style="width: 100px">
          <option>{{me.name}}</option>
          <option selected>{{me.age}}</option>
          <option>{{me.gender}}</option>
        </select>
        <span>SelectedMe: {{selectedMe}}</span>
      </div>
      <div id="select-mult-vfor-demo">
        <select class="select" name="select-mult-vfor" multiple v-model="selectedMe" style="width: 120px">
          <option v-for="(k, v) in me" :value="k">
            {{v}}
          </option>
        </select>
        <span>SelectedMe: {{selectedMe}}</span>
      </div>
    </div>

    <!-- 特效 -->
    <hr>
    <div id="transition-demo">
      <div v-if="checked" transition="expand">
        <h1>Hallo Awesome-Vue</h1>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'app',
    data () {
      return {
        showWelcome: true,
        msg: 'Let us study from w3c school',
        todos: [
          { text: "Study Vue", dateEnd: "2018.01.10" },
          { text: "Study English", dateEnd: "2018.02.14" },
          { text: "Study Management", dateEnd: "2018.03.14" }
        ],
        me: { name: "boxu", age: 32, gender: "male" },
        checked: true, checkedme: [],
        picked: '',
        selected: null, selectedMe: []
      };
    },
    methods: {
      btnSwitchShow: function(event) {
        this.showWelcome = !this.showWelcome;
        alert("Hello " + this.name + "!");
        alert("event.target.tagName: " + event.target.tagName);
      },
      say: function(msg, event) {
        alert(msg);
        if (event) {
          event.preventDefault();
          console.log("Nice you invoke the event: ", event);
        }
      },
      submit: function(event) {
        alert("done");
        console.log("submit: " + event);
      }
    },
    transitions: {
      expand: {
        beforeEnter: function (el) {
          el.textContent = 'beforeEnter';
          console.log('beforeEnter', el);
        },
        enter: function (el) {
          el.textContent = 'enter';
          console.log('enter', el);
        },
        afterEnter: function (el) {
          el.textContent = 'afterEnter';
          console.log('afterEnter', afterEnter);
        },
        beforeLeave: function (el) {
          el.textContent = 'beforeLeave';
          console.log('el.textContent', el.textContent);
        },
        leave: function (el) {
          el.textContent = 'leave';
          console.log('el.textContent', el.textContent);
        },
        afterLeave: function (el) {
          el.textContent = 'afterLeave';
          console.log('el.textContent', el.textContent);
        }
      }
    }
  }
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: yellow;
  margin-top: 30px;
  margin-left: 80px;
  text-shadow: 5px 5px 5px #FF0000;
}

h1 {
  font-weight: bold;
  color: red;
  text-shadow: 5px 5px 5px #FF0000;
}
</styple>
