{
  currentUser: {
    id: 1,
    first_name: "Mallik",
    last_name: "Beuger",
    email: "mallik@yahoo.com",
    city_id: null
  },
  users: {
    entities{
      1: {
        id: 1,
        first_name: "Kurt",
        last_name: "Russell",
        email: "kurt_russell@gmail.com",
        city_id: 1
      },
      3: {
        id: 3,
        first_name: "Zoe",
        last_name: "Bell",
        email: "zoe@zoebell.io",
        city_id: 5
      }
    },
    errors: {

    }
  }
  cities: {
    1: {
      id: 1,
      city_abrv: "SF",
      name: "San Francisco"
    },
    2: {
      id: 2,
      city_abrv: "NY",
      name: "New York City"
    }
  },
  events: {
    entities:{
      2: {
        id: 2,
        name: "Code with me",
        description: "Rudy Intermediate",
        address: "160 Spear St., San Francisco, 94105",
        city_id: 6,
        host_id: 3
      },
      5: {
        id: 5,
        name: "Code for fun",
        description: "JS Beginner"
        address: "245 Market St., San Francisco, 94105",
        city_id: 7,
        host_id: 5
      }
    },
    errors: {

    }
  dashboard: {
    hosted_events: {
      1: {
        id: 1,
        event_id: 2,
        user_id: 1
      },
      2: {
        id: 2,
        event_id: 20,
        user_id: 1
      }
    },
    attended_events: {
      5: {
        id: 5,
        event_id: 23,
        user_id: 5
      },
      4: {
        id: 4,
        event_id: 14,
        user_id: 10
      }
    }
  }
}
