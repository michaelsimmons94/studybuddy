new Vue({
    el: '#app',
    data: () => ({
      drawer: true,
      dialog: false,
      headers: [
        {
          text: 'Title',
          align: 'left',
          sortable: false,
          value: 'name'
        },
        { text: 'Class', value: 'class' },
        { text: 'Teacher', value: 'teacher'},
        { text: 'Date', value:'date'},
        { text: 'Time', value: 'time' },
        { text: 'Location', value: 'location' },
        
      ],
      items: [
        {
          value: false,
          name: 'Econ = the death of me',
          class: 'Econ 110',
          teacher: 'Kearl',
          date: 'March 3',
          time: '12pm',
          location: 'HBLL 3227'
        },
        {
            value: false,
            name: 'Peer review',
            class: 'Wrtg 150',
            teacher: 'Reid',
            date: 'March 2',
            time: '3pm',
            location: 'HBLL 4200'
        },
        {
            value: false,
            name: 'The best class ever',
            class: 'CS 260',
            teacher: 'Zappala',
            date: 'March 2',
            time: '2pm',
            location: 'ESC C215'
        },
        
      ]
    }),
    props: {
      source: String
    }
  })