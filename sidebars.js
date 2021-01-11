const htmlCss = [
  'html-css/intro',
  {
    type: 'category',
    label: 'Основи',
    collapsed: false,
    items: [
      'html-css/html-tags',
      'html-css/css-intro',
      'html-css/css-properties',
      'html-css/typography',
      'html-css/task-cv'
    ]
  },
  {
    type: 'category',
    label: 'Box Model and Flow',
    collapsed: false,
    items: [
      'html-css/box-model',
      'html-css/size-units',
      'html-css/flow',
      'html-css/task-cv-styles',
    ]
  },
  {
    type: 'category',
    label: 'Layout',
    collapsed: false,
    items: [
      'html-css/layout',
      'html-css/flexbox',
      'html-css/semantic-markup',
      'html-css/task-layout',
    ]
  },
  'html-css/markup-by-prototype',
  'html-css/css-methodologies',
  'html-css/css-processors',
  'html-css/style-guide',
  'html-css/animation'
];

const javascript = pathPrefixer('javascript/')([
  'intro',
  'types',
  'inner-html',
  'task-01--todo-list-item-html',
  category('Обработка событий DOM', [
    'dom-event-handling',
    'task-02--todo-list-events',
  ]),
  category('Обработка отправки формы', [
    'submitting-html-form',
    'task-03--todo-list-form',
  ]),
  category('Fetch API', [
    'fetch-api',
    'task-04--use-fetch-api',
  ])
]);

module.exports = {
  main: [
    'course',
    {
      type: 'ref',
      id: 'html-css/intro',
    },
    {
      type: 'ref',
      id: 'javascript/intro'
    }
  ],
  htmlCss,
  javascript
}

function category(label, items) {
  return {
    type: 'category',
    collapsed: false,
    label,
    items
  };
}

function pathPrefixer(prefix) {
  function prependPrefix (item) {
    if (typeof item == 'string') return prefix + item;
    if (Array.isArray(item)) return item.map(prependPrefix)
    switch (item.type) {
      case 'category': return {...item, items: prependPrefix(item.items)}
    }
  }

  return prependPrefix;
}