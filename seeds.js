var mongoose = require('mongoose');
var Campground = require('./models/campground');
var Comment = require('./models/comment');

var data = [
    {
        name: 'Clouds Rest',
        image: 'http://www.rent-a-tent-canada.com/images/Gallery/Rent-a-Tent-Canada_Meadowland6-setupService-Banff.jpg',
        description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nullam sit amet magna in magna gravida vehicula. Duis risus. Mauris dictum facilisis augue. Maecenas libero. Cras pede libero, dapibus nec, pretium sit amet, tempor quis. Etiam quis quam. Vivamus luctus egestas leo. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Duis ante orci, molestie vitae vehicula venenatis, tincidunt ac pede. Etiam egestas wisi a erat. Integer imperdiet lectus quis justo. Suspendisse nisl. Integer tempor. Maecenas ipsum velit, consectetuer eu lobortis ut, dictum at dui.'
    },
    {
        name: 'Banff Campground',
        image: 'https://www.familyfuncanada.com/halifax/files/2016/01/otentik_500.ashx_.jpg',
        description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nullam sit amet magna in magna gravida vehicula. Duis risus. Mauris dictum facilisis augue. Maecenas libero. Cras pede libero, dapibus nec, pretium sit amet, tempor quis. Etiam quis quam. Vivamus luctus egestas leo. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Duis ante orci, molestie vitae vehicula venenatis, tincidunt ac pede. Etiam egestas wisi a erat. Integer imperdiet lectus quis justo. Suspendisse nisl. Integer tempor. Maecenas ipsum velit, consectetuer eu lobortis ut, dictum at dui.'
    },
    {
        name: 'Cluxewe Resort',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9GqVhB6GZ5cA93TGUX7pXU9SfG2RBA_JpXh6-bBbun8VYv3aP',
        description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nullam sit amet magna in magna gravida vehicula. Duis risus. Mauris dictum facilisis augue. Maecenas libero. Cras pede libero, dapibus nec, pretium sit amet, tempor quis. Etiam quis quam. Vivamus luctus egestas leo. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Duis ante orci, molestie vitae vehicula venenatis, tincidunt ac pede. Etiam egestas wisi a erat. Integer imperdiet lectus quis justo. Suspendisse nisl. Integer tempor. Maecenas ipsum velit, consectetuer eu lobortis ut, dictum at dui.'
    }
    ];

function seedDb() {
    //remove all campgrounds
    Campground.deleteMany({}, function(err) {
        if(err) {
            console.log(err)
        }
        //add few campgrounds
        // data.forEach(function(seed) {
        //     Campground.create(seed, function(err,campground){
        //         if(err) {
        //             console.log(err)
        //         } else {
        //             Comment.create({
        //                 text: "This place is great, but I wish there was internet",
        //                 author: 'Homer'
        //             }, function(err,comment){
        //                 if(err) {
        //                     console.log(err)
        //                 } else {
        //                     campground.comments.push(comment);
        //                     campground.save();
        //                 }
        //             })
        //         }
        //     })
        // })
    });
    //add few comments

}

module.exports = seedDb;


