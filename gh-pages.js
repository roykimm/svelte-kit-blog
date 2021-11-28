import { publish } from 'gh-pages';

publish(
    'build', // path to public directory
    {
        branch: 'gh-pages',
        repo: 'https://github.com/roykimm/myblog.git', // Update to point to your repository
        user: {
            name: 'roykimm', // update to use your name
            email: 'roykimmyunghoon@gmail.com' // Update to use your email
        },
        dotfiles: true
    },
    () => {
        console.log('Deploy Complete!');
    }
);