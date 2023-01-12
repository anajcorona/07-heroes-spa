import { heroes } from "../data/heroes";

export const getHeroesByPublisher = ( publisher ) => {
    console.log('getHeroesByPublisher');
    const validPublishers = [ 'DC Comics', 'Marvel Comics' ];
    if ( !validPublishers.includes(publisher) ) {
        // console.log('IS not a valid publisher')
        throw new Error(`${ publisher } is not a valid Publisher`);
    }
    let x = heroes.filter( heroe => heroe.publisher === publisher);
    console.log(x)
    return x;
};