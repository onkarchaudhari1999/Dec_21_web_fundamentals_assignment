var g_class = {
    'name': "Dec21WebFundamentals",
    'instructor': {
      'name': "Aayush Sinha",
      'subject': "MERN"
    },
    'students': [{
        'name': 'Kapil',
        'marks': 86,
      },
      {
        'name': 'Ramesh',
        'marks': 88,
      },
      {
        'name': 'Vaishnavi',
        'marks': 75,
      },
      {
        'name': 'Sanket',
        'marks': 74,
      },
      {
       'name': 'Raju',
       'marks': 69,
      },
      {
       'name': 'Jay',
       'marks': 77,
      },
      {
       'name': 'Akshay',
       'marks': 87,
      }
    ],
  };

for(var j = 0; j < g_class.students.length; j++){
    if(g_class.students[j].marks >= 85 ){
        console.log(g_class.students[j].name);
    }


} 