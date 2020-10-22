<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\book;
use Faker\Generator as Faker;

$factory->define(book::class, function (Faker $faker) {
    return [
        'expert_id' => 3,
        'from' => '3:00:00 PM',
        'to' => '3:15:00 PM',
        'type' => 15,
    ];
});
