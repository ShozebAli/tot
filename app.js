angular.module("myApp", ["ngMaterial","angular-sortable-view","ngMdIcons"])

.controller("appController",[ "$scope", "$mdDialog",  appController ]);


function appController($scope,$mdDialog){

    $scope.project = {
        Todo :{},
        Doing : {},
        Review : {},
        Done : {}
    };

    var ref = new Firebase("https://teamofteam.firebaseio.com/projects");

    ref.child("projectId1234").child("Todo").on("child_added",function(snap){
        console.log(snap.key(), snap.val());
        $scope.project.Todo[snap.key()] = snap.val();
        $scope.$digest();
    });

    ref.child("projectId1234").child("Todo").on("child_removed",function(val){
        console.log(val.val());
        delete $scope.project.Todo[val.key()];
        $scope.$digest();
    });

    ref.child("projectId1234").child("Doing").on("child_added",function(val){


    });
    ref.child("projectId1234").child("Review").on("child_added",function(val){


    });
    ref.child("projectId1234").child("Done").on("child_added",function(val){


    });



     $scope.addNewTask = function(newTask){

        ref.child("projectId1234").child("Todo").push(newTask);
        $scope.newTask = "";
    }

}