import {bootstrap, Foreach} from 'angular2/angular2';
import {Component, Template} from 'annotations';

interface Friend {
    name: string;
    age: number;
    howWeMet: string;
    whereWeMet: string;
    showDetails: boolean;
}

@Component({
    selector: 'friends-app',
    componentServices: []
})
@Template({
        url: 'friends.html',
        directives: [Foreach]
    })
class FriendsApp {
    friends: Array<Friend>;
    
    toggleDetails(friend: Friend) {
        friend.showDetails = !friend.showDetails;    
    }
    
    constructor() {
        this.friends = [
            {
                name: "John",
                age: 31,
                whereWeMet: "Vancouver",
                howWeMet: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vulputate nisl in faucibus viverra. Aenean ex orci, porta quis sapien nec, efficitur volutpat mi.",
                showDetails: false
            },
            {
                name: "Jane",
                age: 34,
                whereWeMet: "Montreal",
                howWeMet: "Morbi vitae enim ut turpis sollicitudin fermentum. Aliquam odio erat, ornare eu neque ut, lacinia blandit neque. Vivamus hendrerit molestie felis et egestas.",
                showDetails: false
            },
            {
                name: "Frank",
                age: 29,
                whereWeMet: "Tokyo",
                howWeMet: "Suspendisse potenti. Nulla facilisi. Aliquam molestie consectetur egestas. Donec nec leo eu quam egestas dignissim.",
                showDetails: false
            },
            {
                name: "Carol",
                age: 39,
                whereWeMet: "Paris",
                howWeMet: "Suspendisse sed mauris suscipit elit tincidunt imperdiet vitae et nunc. Praesent dictum iaculis risus facilisis ultrices. Etiam a maximus massa, ac condimentum nisi.",
                showDetails: false
            }
        ];
    }
}

export function main () {
    bootstrap(FriendsApp);
}