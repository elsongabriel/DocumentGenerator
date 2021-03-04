import {animate, group, keyframes, query, stagger, state, style, transition, trigger,} from '@angular/animations';

export const routerTransition = trigger('routerTransition', [
    transition('* <=> *', [
        /* order */
        /* 1 */ query(
            ':enter, :leave',
            style({position: 'fixed', width: '100%'}),
            {optional: true}
        ),
        /* 2 */ query('.block', style({opacity: 0}), {optional: true}),
        /* 3 */ group([
            // block executes in parallel
            query(
                ':enter',
                [
                    style({transform: 'translateY(100vw)', opacity: 0}),
                    animate(
                        '0.3s ease-in-out',
                        style({transform: 'translateY(0vw)', opacity: 1})
                    ),
                ],
                {optional: true}
            ),
            query(
                ':leave',
                [
                    style({transform: 'translateY(0vw)', opacity: 1}),
                    animate(
                        '0.3s ease-in-out',
                        style({transform: 'translateY(-100vw)', opacity: 0})
                    ),
                ],
                {optional: true}
            ),
        ]),
        /* 4 */ query(
            ':enter .block',
            stagger(400, [
                style({transform: 'translateY(100px)'}),
                animate(
                    '.4s ease-in-out',
                    style({transform: 'translateY(0px)', opacity: 1})
                ),
            ]),
            {optional: true}
        ),
    ]),
]);

export const showup = trigger('showup', [
    transition('void => *', [
        style({transform: 'translateY(-20%)'}),
        animate(500, style({transform: 'translateY(0)'})),
    ]),
    transition('* => void', [
        style({transform: 'translateY(0)'}),
        animate(500, style({transform: 'translateY(-20%)'})),
    ]),
]);

export const showdown = trigger('showdown', [
    transition('void => *', [
        style({transform: 'translateY(100vh)'}),
        animate('350ms ease', style({transform: 'translateY(0)'})),
    ]),
    transition('* => void', [
        style({transform: 'translateY(0)'}),
        animate('350ms ease', style({transform: 'translateY(100vh)'})),
    ]),
    transition('* => *', [
        style({transform: 'translateY(0)'}),
        animate('400ms ease', style({transform: 'translateY(100vh)'})),
    ]),
]);

export const showUpDown = trigger('showUpDown', [
    transition('void => *', [
        style({transform: 'translateX(20vw)', opacity: 0}),
        animate(300, style({transform: 'translateX(0)', opacity: 1})),
    ]),
]);

export const showRightLeft = trigger('showRightLeft', [
    transition('void => *', [
        style({transform: 'translateX(100vw)', opacity: 0}),
        animate(300, style({transform: 'translateX(0)', opacity: 1})),
    ]),
    transition('* => void', [
        style({transform: 'translateX(0)', opacity: 0}),
        animate(300, style({transform: 'translateX(-100vw)', opacity: 1})),
    ]),
    transition('* => *', [
        style({transform: 'translateX(-100vw)', opacity: 0}),
        animate(300, style({transform: 'translateX(0)', opacity: 1})),
    ]),
]);

export const fade = trigger('fade', [
    transition('void => *', [
        style({opacity: '0'}),
        animate(300, style({opacity: '1'})),
    ]),
    transition('* => void', [
        style({opacity: '1'}),
        animate(300, style({opacity: '0'})),
    ]),
]);

export const listObjShowupOld = trigger('listObjShowupOld', [
    transition('* => *', [
        query(':enter', style({opacity: 0}), {optional: true}),
        query(
            ':enter',
            stagger('150ms', [
                animate(
                    '300ms cubic-bezier(.25,.75,.5,1.25)',
                    keyframes([
                        style({opacity: 0, transform: 'translateX(-200px)'}),
                        style({opacity: 0.3, transform: 'translateX(-100px)'}),
                        style({opacity: 1, transform: 'translateX(0)'}),
                    ])
                ),
            ]),
            {optional: true}
        ),
    ]),
]);

export const listObjShowup = trigger('listObjShowup', [
    transition('* => *', [
        query(':enter', style({opacity: 0}), {optional: true}),
        query(
            ':enter',
            stagger('50ms', [
                animate(
                    '300ms cubic-bezier(.25, .75, .5, 1)',
                    keyframes([
                        style({opacity: 0, height: '0px', width: '70%'}),
                        style({opacity: 0.3, height: '10px', width: '80%'}),
                        style({opacity: 0.5, height: '20px', width: '85%'}),
                        style({opacity: 0.8, height: '30px', width: '90%'}),
                        style({opacity: 0.9, height: '40px', width: '95%'}),
                        style({opacity: 1, height: '48px', width: '100%'}),
                    ])
                ),
            ]),
            {optional: true}
        ),
    ]),
]);

export const listNiches = trigger('listNiches', [
    transition('* => *', [
        query(':enter', style({opacity: 0}), {optional: true}),
        query(
            ':enter',
            stagger('150ms', [
                animate(
                    '300ms cubic-bezier(.25,.75,.5,1.25)',
                    keyframes([
                        style({opacity: 0, transform: 'translate3d(0,100%,0)'}),
                        style({opacity: 0.5, transform: ' translate3d(0,50%,0)'}),
                        style({opacity: 1, transform: ' translate3d(0,0,0)'}),
                    ])
                ),
            ]),
            {optional: true}
        ),
    ]),
]);

export const detailExpand = trigger('detailExpand', [
    state(
        'collapsed',
        style({height: '0px', maxHeight: '0', overflow: 'hidden'})
    ),
    state('expanded', style({height: '*'})),
    transition(
        'expanded <=> collapsed',
        animate('1s cubic-bezier(0.4, 0.0, 0.2, 1)')
    ),
]);

export const slide = trigger('slide', [
    transition('* => void', [
        style({transform: 'translateX(-20%)'}),
        animate(
            '300ms cubic-bezier(.25,.75,.5,1.25)',
            style({transform: 'translateX(0)'})
        ),
    ]),
    transition('void => *', [
        style({transform: 'translateX(0)'}),
        animate(
            '300ms cubic-bezier(.25,.75,.5,1.25)',
            style({transform: 'translateX(-20%)'})
        ),
    ]),
]);
