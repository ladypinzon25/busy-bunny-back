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
