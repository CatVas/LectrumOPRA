// Core
import { createSelector } from 'reselect';

// Instruments
import appState from '../init/appState';
import { log } from 'helpers';

const getPosts = (state) => state.posts;

const selectJanePosts = createSelector(
    getPosts,
    (posts) => {
        log('→ the result function was recomputed', 'aefd3e');

        return posts.filter((post) => {
            return post.author.name === 'Jane';
        });
    },
);

// Вычисление
console.time('✅ selector computes');
const janePosts1 = selectJanePosts(appState);
console.timeEnd('✅ selector computes');

// Мемоизация
console.time('🎉 selector returns memoized value');
const janePosts2 = selectJanePosts(appState);
console.timeEnd('🎉 selector returns memoized value');

log('• −−−−−−−−− •', '1aa395');

console.log('→ janePosts1', janePosts1);
console.log('→ janePosts2', janePosts2);

log(`• recomputations • ${selectJanePosts.recomputations()}`, 'f9d8a7');
