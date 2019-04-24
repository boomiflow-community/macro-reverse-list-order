var l1 = state.getArray("{![List1]}");
var l2 = state.getArray("{![List2]}");
var l3 = state.getArray("{![ListAPI]}");

l1.reverse();
l2.reverse();
l3.reverse();

state.setArray("{![List1]}", l1);
state.setArray("{![List2]}", l2);
state.setArray("{![ListAPI]}", l3);
