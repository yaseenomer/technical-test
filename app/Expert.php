<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Expert extends Model
{
    public function books() {
        return $this->hasMany(book::class);
    }

    public function approvedBooks() {
        return $this->hasMany(BookApprove::class);
    }
}
