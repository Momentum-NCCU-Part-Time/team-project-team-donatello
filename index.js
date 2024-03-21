const todolist = new Vue({
    el: '#vue',
    data: {
      newItem: '',
      items: [
        {
          id: 1,
          name: 'wash dishes',
          completed: false,
        },
        {
          id: 2,
          name: 'take out the trash',
          completed: true,
        },
      ],
    },
    computed: {
      reversedItems() {
        return this.items.slice(0).reverse();
      },
    },
    methods: {
      addItem: function () {
        this.items.push({
          id: this.items.length + 1,
          name: this.newItem,
          completed: false,
        });
        this.newItem = '';
      },
      toggleCompleted: function (item) {
        item.completed = !item.completed;
      },
      removeItem: function (item) {
        this.items = this.items.filter((newItem) => newItem.name !== item.name);
      },
    },
  });