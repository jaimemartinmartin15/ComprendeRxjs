export interface HomeMenuLink {
  subtitle: string;
  links: {
    display: string;
    url: string;
  }[];
}

export const LINKS_TO_START: HomeMenuLink = {
  subtitle: 'Para empezar',
  links: [
    { display: 'Observable', url: '/observable' },
    { display: 'Subject', url: '/subject' },
    { display: 'BehaviorSubject', url: '/behaviorSubject' },
  ],
};

export const LINKS_GROUPS_OPERATORS: HomeMenuLink[] = [
  {
    subtitle: 'Transformación',
    links: [
      { display: 'mergeMap', url: '/mergeMap' },
      { display: 'concatMap', url: '/concatMap' },
      { display: 'switchMap', url: '/switchMap' },
      { display: 'exhaustMap', url: '/exhaustMap' },
    ],
  },
  {
    subtitle: 'Unión',
    links: [
      { display: 'combineLatestWith', url: '/combineLatestWith' },
      { display: 'forkJoin', url: '/forkJoin' },
      { display: 'startWith', url: '/startWith' },
      { display: 'endWith', url: '/endWith' },
    ],
  },
  {
    subtitle: 'Tiempo',
    links: [
      { display: 'debounceTime', url: '/debounceTime' },
      { display: 'sampleTime', url: '/sampleTime' },
      { display: 'auditTime', url: '/auditTime' },
    ],
  },
  {
    subtitle: 'Filtro',
    links: [
      { display: 'distinctUntilChanged', url: '/distinctUntilChanged' },
      { display: 'skip', url: '/skip' },
      { display: 'first', url: '/first' },
      { display: 'take', url: '/take' },
      { display: 'takeUntil', url: '/takeUntil' },
      { display: 'filter', url: '/filter' },
      { display: 'takeWhile', url: '/takeWhile' },
      { display: 'distinct', url: '/distinct' },
    ],
  },
  {
    subtitle: 'Creación',
    links: [
      { display: 'of', url: '/of' },
      { display: 'from', url: '/from' },
      { display: 'interval', url: '/interval' },
      { display: 'timer', url: '/timer' },
    ],
  },
];
