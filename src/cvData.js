import uniqid from "uniqid";

/*
- EMPTY_CV = [] 
  - section = {} 
    - section name, 
    - section items: [], 
      - item = {} 
        - item id 
        - item fields: [] 
          - field = {} 
            - fieldName,
            - value, 
            - ... 
*/

export const SAMPLE_CV = [
  {
    name: "General",
    hasButtons: false,
    items: [
      {
        id: uniqid(),
        fields: [
          {
            fieldName: "firstName",
            value: "Piotr",
            type: "text",
            label: "First Name",
          },
          {
            fieldName: "lastName",
            value: "Najda",
            type: "text",
            label: "Last Name",
          },
          {
            fieldName: "phone",
            value: "+48 123 456 789",
            type: "tel",
            label: "Telephone",
          },
          {
            fieldName: "email",
            value: "najdapiotr00@gmail.com",
            type: "email",
            label: "Email",
          },
          {
            fieldName: "github",
            value: "piotrnajda3000",
            type: "text",
            label: "Github Username",
          },
        ],
      },
    ],
  },
  {
    name: "Experience",
    items: [
      {
        id: uniqid(),
        fields: [
          {
            fieldName: "company",
            value: "School",
            type: "text",
            label: "Company",
          },
          {
            fieldName: "position",
            value: "Student",
            type: "text",
            label: "Position",
          },
          {
            fieldName: "from",
            value: "2007",
            type: "text",
            label: "From",
          },
          {
            fieldName: "to",
            value: "",
            type: "text",
            label: "To",
          },
        ],
      },
      {
        id: uniqid(),
        fields: [
          {
            fieldName: "company",
            value: "Spotify",
            type: "text",
            label: "Company",
          },
          {
            fieldName: "position",
            value: "Play Button Operator",
            type: "text",
            label: "Position",
          },
          {
            fieldName: "from",
            value: "2016",
            type: "text",
            label: "From",
          },
          {
            fieldName: "to",
            value: "2022",
            type: "text",
            label: "To",
          },
        ],
      },
    ],
  },
  {
    name: "Education",
    items: [
      {
        id: uniqid(),
        fields: [
          {
            fieldName: "school",
            value: "Uniersity of Technology and Management",
            type: "text",
            label: "School",
          },
          {
            fieldName: "location",
            value: "Rzeszow, Poland",
            type: "text",
            label: "Location",
          },
          {
            fieldName: "degree",
            value: "Engineer's degree in IT",
            type: "text",
            label: "Degree",
          },
          {
            fieldName: "from",
            value: "10/2021",
            type: "text",
            label: "From",
          },
          {
            fieldName: "to",
            value: "",
            type: "text",
            label: "To",
          },
        ],
      },
      {
        id: uniqid(),
        fields: [
          {
            fieldName: "school",
            value: "AMA Film Academy",
            type: "text",
            label: "School",
          },
          {
            fieldName: "location",
            value: "Kraków, Poland",
            type: "text",
            label: "Location",
          },
          {
            fieldName: "degree",
            value: "Cinematography course",
            type: "text",
            label: "Degree",
          },
          {
            fieldName: "from",
            value: "10/2018",
            type: "text",
            label: "From",
          },
          {
            fieldName: "to",
            value: "01/2021",
            type: "text",
            label: "To",
          },
        ],
      },
    ],
  },
];

export const EMPTY_CV = [
  {
    name: "General",
    hasButtons: false,
    items: [
      {
        id: uniqid(),
        fields: [
          {
            fieldName: "firstName",
            value: "",
            type: "text",
            label: "First Name",
          },
          {
            fieldName: "lastName",
            value: "",
            type: "text",
            label: "Last Name",
          },
          {
            fieldName: "phone",
            value: "",
            type: "tel",
            label: "Telephone",
          },
          {
            fieldName: "email",
            value: "",
            type: "email",
            label: "Email",
          },
          {
            fieldName: "github",
            value: "",
            type: "text",
            label: "Github Username",
          },
        ],
      },
    ],
  },
  {
    name: "Experience",
    items: [
      {
        id: uniqid(),
        fields: [
          {
            fieldName: "company",
            value: "",
            type: "text",
            label: "Company",
          },
          {
            fieldName: "position",
            value: "",
            type: "text",
            label: "Position",
          },
          {
            fieldName: "from",
            value: "",
            type: "text",
            label: "From",
          },
          {
            fieldName: "to",
            value: "",
            type: "text",
            label: "To",
          },
        ],
      },
    ],
  },
  {
    name: "Education",
    items: [
      {
        id: uniqid(),
        fields: [
          {
            fieldName: "school",
            value: "",
            type: "text",
            label: "School",
          },
          {
            fieldName: "location",
            value: "",
            type: "text",
            label: "Location",
          },
          {
            fieldName: "degree",
            value: "",
            type: "text",
            label: "Degree",
          },
          {
            fieldName: "from",
            value: "",
            type: "text",
            label: "From",
          },
          {
            fieldName: "to",
            value: "",
            type: "text",
            label: "To",
          },
        ],
      },
    ],
  },
];
