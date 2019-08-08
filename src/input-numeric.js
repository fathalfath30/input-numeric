/*
 //
 //    ______    _   _           _  __      _   _     ____   ___
 //   |  ____|  | | | |         | |/ _|    | | | |   |___ \ / _ \
 //   | |__ __ _| |_| |__   __ _| | |_ __ _| |_| |__   __) | | | |
 //   |  __/ _` | __| '_ \ / _` | |  _/ _` | __| '_ \ |__ <| | | |
 //   | | | (_| | |_| | | | (_| | | || (_| | |_| | | |___) | |_| |
 //   |_|  \__,_|\__|_| |_|\__,_|_|_| \__,_|\__|_| |_|____/ \___/
 //
 // Licensed under GNU General Public License v3.0
 // http://www.gnu.org/licenses/gpl-3.0.txt
 // Written by Fathalfath30. Email : fathalfath30@gmail.com
 // Follow me on GithHub : https://github.com/Fathalfath30
 //
 // For the brave souls who get this far: You are the chosen ones,
 // the valiant knights of programming who toil away, without rest,
 // fixing our most awful code. To you, true saviors, kings of men,
 //
 // I say this: never gonna give you up, never gonna let you down,
 // never gonna run around and desert you. Never gonna make you cry,
 // never gonna say goodbye. Never gonna tell a lie and hurt you.
 //
*/
(function ($) {
    "use strict";

    function is_number (evt) {
        evt = (evt) ? evt : window.event;
        var charCode = (evt.which) ? evt.which : evt.keyCode;

        if (charCode > 31 && (charCode < 48 || charCode > 57)) {
            return false;
        }

        return true;
    }

    $ (".input-number").on ('keypress', function (event) {
        return is_number (event);
    });
}) (jQuery);
