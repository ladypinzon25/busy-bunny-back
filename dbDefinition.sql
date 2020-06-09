create table users (
  id int auto_increment,
  name varchar(255) not null,
  picture varchar(255) not null default 'https://cdn.cinepapaya.com/stat/img/static-cp/cine/newsstory/el-radical-cambio-de-look-de-will-smith-que-preocupo-a-sus-fanaticos-main-1583428989.jpg',
  created datetime not null default current_timestamp,
  constraint people_pk
    primary key (id)
);

create table tasks (
  id int auto_increment,
  userId int not null,
  description text not null,
  state varchar(32) not null default 'to-do',
  created datetime not null default current_timestamp,
  constraint tasks_pk
	primary key (id),
  index task_user_fk_idx (userId asc),
  constraint task_user_fk
    foreign key (userId)
    references users (id)
    on delete cascade
    on update cascade
);

insert into users (id, name, picture, created) values (1, 'Beatrix Kiddo', 'https://rawcdn.githack.com/ljpinzon12/busy-bunny-front/fdfcd7df1dfe6dc82756d6921e3049b0f42318e7/public/images/user01.png', '2020-06-08 23:05:48');
insert into users (id, name, picture, created) values (2, 'Benjamin Buford', 'https://rawcdn.githack.com/ljpinzon12/busy-bunny-front/fdfcd7df1dfe6dc82756d6921e3049b0f42318e7/public/images/user06.png', '2020-06-08 23:06:35');
insert into users (id, name, picture, created) values (3, 'Joseph Cooper', 'https://rawcdn.githack.com/ljpinzon12/busy-bunny-front/fdfcd7df1dfe6dc82756d6921e3049b0f42318e7/public/images/user03.png', '2020-06-08 23:07:04');

insert into tasks (id, userId, description, state, created) values (1, 1, 'Avenge her missing daughter by fighting against Bill.', 'to-do', '2020-06-08 23:07:39');
insert into tasks (id, userId, description, state, created) values (2, 2, 'Build a shrimp company alongside Forest Gump.', 'to-do', '2020-06-08 23:07:53');
insert into tasks (id, userId, description, state, created) values (3, 3, 'Travel to Gargantua and find a suitable planet for humanity.', 'to-do', '2020-06-08 23:08:37');
insert into tasks (id, userId, description, state, created) values (4, 3, 'Visit Murph in the spacial station near to Saturn.', 'to-do', '2020-06-08 23:11:46');
