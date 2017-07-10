import React, {Component} from 'react';
import MainContainer from './mainContainer/mainContainer';
import BottomMenu from './bottomMenu/bottomMenu';
import TopMenu from './topMenu/topMenu';


class App extends Component {
    render() {
        return (
            <div>
                <TopMenu>
                    Here you can put anything you like. Remember to stay within the height constraints. If you need to change the height of the topMenu or the bottomMenu, just modify their css files. Remember to also modify the top and bottom margins on the main container to match. If you ever add a LESS compiler, then this makes it super simple to adjust by setting variables for the top and bottom heights.
                </TopMenu>

                <MainContainer>
                    This is the body where you can put any content.
                </MainContainer>
                <BottomMenu>
                    This is usually the bottom nav with convenient links. If you are using react-router you could place links in here to different pages.
                </BottomMenu>

            </div>
        );
    }
}

export default App;
