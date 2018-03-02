new Vue({
    el: '#app',
    data: () => ({
      drawer: true,
      dialog: false,
      cards: [
        { title: 'Join', src: 'images/join.jpg', flex: 4, text:"Join a community of like-minded peers who are looking for other students to study with." },
        { title: 'Study', src: 'images/connect.jpg', flex: 4, text:"Use the study feature to set up and join study sessions where you'll find out where and when people are meeting up to cram for that next exam!" },
        { title: 'Connect', src: 'images/newHero2.jpeg', flex: 4, text:"Make friendships along the way as you work to conquer those tough courses." }
      ]
    }),
  
    props: {
      source: String
    }
  })