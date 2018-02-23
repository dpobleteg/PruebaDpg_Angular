import { Injectable } from '@angular/core';
import {InMemoryDbService} from 'angular-in-memory-web-api';
@Injectable()
export class InMemoryApiService implements InMemoryDbService {

  constructor() { }

  createDb() {
    const users = [
      {
        'id': '5a8e2ca0d69f6d9b88fd61da',
        'Name': 'Jeannette',
        'LastName': 'Thornton',
        'email': 'jeannette.thornton@pruebaundefined.biz'
      },
      {
        'id': '5a8e2ca0674f4bd7e8bf56ef',
        'Name': 'Shelby',
        'LastName': 'Robinson',
        'email': 'shelby.robinson@pruebaundefined.me'
      },
      {
        'id': '5a8e2ca05d38efd437787dd0',
        'Name': 'Paula',
        'LastName': 'Wilkinson',
        'email': 'paula.wilkinson@pruebaundefined.org'
      },
      {
        'id': '5a8e2ca0e602f9502597e2ac',
        'Name': 'Ana',
        'LastName': 'Andrews',
        'email': 'ana.andrews@pruebaundefined.tv'
      },
      {
        'id': '5a8e2ca06decbcea6c56c6e8',
        'Name': 'Patel',
        'LastName': 'Bonner',
        'email': 'patel.bonner@pruebaundefined.info'
      },
      {
        'id': '5a8e2ca04e1aaf0cf8189943',
        'Name': 'Dickerson',
        'LastName': 'Moon',
        'email': 'dickerson.moon@pruebaundefined.io'
      },
      {
        'id': '5a8e2ca03e05cfd030357964',
        'Name': 'Swanson',
        'LastName': 'Potts',
        'email': 'swanson.potts@pruebaundefined.us'
      },
      {
        'id': '5a8e2ca0bf60183619a42a52',
        'Name': 'Vazquez',
        'LastName': 'Underwood',
        'email': 'vazquez.underwood@pruebaundefined.name'
      },
      {
        'id': '5a8e2ca02e16d934b9173c61',
        'Name': 'Solomon',
        'LastName': 'Charles',
        'email': 'solomon.charles@pruebaundefined.com'
      },
      {
        'id': '5a8e2ca0164b76ad3bf9f5c4',
        'Name': 'Garcia',
        'LastName': 'Johns',
        'email': 'garcia.johns@pruebaundefined.net'
      },
      {
        'id': '5a8e2ca0c06c5ec5538cb308',
        'Name': 'Noelle',
        'LastName': 'Lewis',
        'email': 'noelle.lewis@pruebaundefined.co.uk'
      },
      {
        'id': '5a8e2ca0e8b06094b05dbd5f',
        'Name': 'Serena',
        'LastName': 'Hebert',
        'email': 'serena.hebert@pruebaundefined.biz'
      },
      {
        'id': '5a8e2ca0785cc3143e128b12',
        'Name': 'Harper',
        'LastName': 'Osborn',
        'email': 'harper.osborn@pruebaundefined.biz'
      },
      {
        'id': '5a8e2ca02c61662c1c087d30',
        'Name': 'Charlene',
        'LastName': 'Branch',
        'email': 'charlene.branch@pruebaundefined.me'
      },
      {
        'id': '5a8e2ca0bba3ec91b8664c9c',
        'Name': 'Gloria',
        'LastName': 'Tucker',
        'email': 'gloria.tucker@pruebaundefined.org'
      },
      {
        'id': '5a8e2ca0eea99a0cc11ac048',
        'Name': 'Francesca',
        'LastName': 'Stout',
        'email': 'francesca.stout@pruebaundefined.tv'
      },
      {
        'id': '5a8e2ca0237be3af70ceda9a',
        'Name': 'Rochelle',
        'LastName': 'Davis',
        'email': 'rochelle.davis@pruebaundefined.info'
      },
      {
        'id': '5a8e2ca0429b004a90ec0062',
        'Name': 'Pope',
        'LastName': 'Meadows',
        'email': 'pope.meadows@pruebaundefined.io'
      },
      {
        'id': '5a8e2ca06803496ff7b72b15',
        'Name': 'Gross',
        'LastName': 'Estrada',
        'email': 'gross.estrada@pruebaundefined.us'
      },
      {
        'id': '5a8e2ca0dc1ed48c9def3675',
        'Name': 'Dionne',
        'LastName': 'Avila',
        'email': 'dionne.avila@pruebaundefined.name'
      },
      {
        'id': '5a8e2ca0cfccfeaca14cc0e9',
        'Name': 'Mccarty',
        'LastName': 'Morgan',
        'email': 'mccarty.morgan@pruebaundefined.com'
      },
      {
        'id': '5a8e2ca0103b82ca5dd45bfd',
        'Name': 'Valencia',
        'LastName': 'Zamora',
        'email': 'valencia.zamora@pruebaundefined.net'
      },
      {
        'id': '5a8e2ca072b6a70812b478af',
        'Name': 'Crosby',
        'LastName': 'West',
        'email': 'crosby.west@pruebaundefined.co.uk'
      },
      {
        'id': '5a8e2ca0b8ef9b3e3916c6c5',
        'Name': 'Kidd',
        'LastName': 'Porter',
        'email': 'kidd.porter@pruebaundefined.biz'
      },
      {
        'id': '5a8e2ca08a8fafea5d670b40',
        'Name': 'Kari',
        'LastName': 'Walter',
        'email': 'kari.walter@pruebaundefined.biz'
      },
      {
        'id': '5a8e2ca01e1223f0edf3b268',
        'Name': 'Sims',
        'LastName': 'Sargent',
        'email': 'sims.sargent@pruebaundefined.me'
      },
      {
        'id': '5a8e2ca0adaaa51904dd360a',
        'Name': 'Hebert',
        'LastName': 'Patton',
        'email': 'hebert.patton@pruebaundefined.org'
      },
      {
        'id': '5a8e2ca0ac71b102ddd42281',
        'Name': 'Hinton',
        'LastName': 'Carpenter',
        'email': 'hinton.carpenter@pruebaundefined.tv'
      },
      {
        'id': '5a8e2ca09da22c6648207a14',
        'Name': 'Armstrong',
        'LastName': 'Leonard',
        'email': 'armstrong.leonard@pruebaundefined.info'
      },
      {
        'id': '5a8e2ca03b80c5686b18dbd0',
        'Name': 'Kelley',
        'LastName': 'Snyder',
        'email': 'kelley.snyder@pruebaundefined.io'
      },
      {
        'id': '5a8e2ca06d621ad0041f2399',
        'Name': 'Greer',
        'LastName': 'Rose',
        'email': 'greer.rose@pruebaundefined.us'
      },
      {
        'id': '5a8e2ca058f5166f9d59830e',
        'Name': 'Hannah',
        'LastName': 'Jenkins',
        'email': 'hannah.jenkins@pruebaundefined.name'
      },
      {
        'id': '5a8e2ca0afc27f56c11e1194',
        'Name': 'Murray',
        'LastName': 'Davenport',
        'email': 'murray.davenport@pruebaundefined.com'
      },
      {
        'id': '5a8e2ca09b0a1692d12c7d95',
        'Name': 'Beverly',
        'LastName': 'Cain',
        'email': 'beverly.cain@pruebaundefined.net'
      },
      {
        'id': '5a8e2ca0d14add02b876e3a3',
        'Name': 'Marshall',
        'LastName': 'Morrow',
        'email': 'marshall.morrow@pruebaundefined.co.uk'
      },
      {
        'id': '5a8e2ca02c827568186c368f',
        'Name': 'Ebony',
        'LastName': 'Bauer',
        'email': 'ebony.bauer@pruebaundefined.biz'
      },
      {
        'id': '5a8e2ca0958caafda928c67c',
        'Name': 'Short',
        'LastName': 'Ayers',
        'email': 'short.ayers@pruebaundefined.biz'
      },
      {
        'id': '5a8e2ca0e80566924d593812',
        'Name': 'Consuelo',
        'LastName': 'Donaldson',
        'email': 'consuelo.donaldson@pruebaundefined.me'
      },
      {
        'id': '5a8e2ca01d49432d1f180f3c',
        'Name': 'Betsy',
        'LastName': 'Stafford',
        'email': 'betsy.stafford@pruebaundefined.org'
      },
      {
        'id': '5a8e2ca0f5077d2169c6855c',
        'Name': 'Franks',
        'LastName': 'Tate',
        'email': 'franks.tate@pruebaundefined.tv'
      },
      {
        'id': '5a8e2ca0191dc855af1ef7f9',
        'Name': 'Clemons',
        'LastName': 'Fuentes',
        'email': 'clemons.fuentes@pruebaundefined.info'
      },
      {
        'id': '5a8e2ca0fecba0eb7deddd50',
        'Name': 'Jeannie',
        'LastName': 'Valencia',
        'email': 'jeannie.valencia@pruebaundefined.io'
      },
      {
        'id': '5a8e2ca0f5756178e5f05ce9',
        'Name': 'Coffey',
        'LastName': 'Patel',
        'email': 'coffey.patel@pruebaundefined.us'
      },
      {
        'id': '5a8e2ca03b3244760a2c07c6',
        'Name': 'Goldie',
        'LastName': 'Vincent',
        'email': 'goldie.vincent@pruebaundefined.name'
      },
      {
        'id': '5a8e2ca086b5b5445ce5b9a7',
        'Name': 'Tisha',
        'LastName': 'Dominguez',
        'email': 'tisha.dominguez@pruebaundefined.com'
      },
      {
        'id': '5a8e2ca03c5cdbd76863473c',
        'Name': 'Kayla',
        'LastName': 'Oconnor',
        'email': 'kayla.oconnor@pruebaundefined.net'
      },
      {
        'id': '5a8e2ca011a847259cf2c37b',
        'Name': 'Sharpe',
        'LastName': 'Clay',
        'email': 'sharpe.clay@pruebaundefined.co.uk'
      },
      {
        'id': '5a8e2ca07312e18a68603012',
        'Name': 'Tonia',
        'LastName': 'Burns',
        'email': 'tonia.burns@pruebaundefined.biz'
      },
      {
        'id': '5a8e2ca0b52e639ac711a893',
        'Name': 'Cantu',
        'LastName': 'Carrillo',
        'email': 'cantu.carrillo@pruebaundefined.biz'
      },
      {
        'id': '5a8e2ca074d56101654ed746',
        'Name': 'Melton',
        'LastName': 'Mayo',
        'email': 'melton.mayo@pruebaundefined.me'
      },
      {
        'id': '5a8e2ca0796c06f733a58783',
        'Name': 'Vicki',
        'LastName': 'Haney',
        'email': 'vicki.haney@pruebaundefined.org'
      },
      {
        'id': '5a8e2ca0931dc891f61d61dd',
        'Name': 'Erna',
        'LastName': 'Sandoval',
        'email': 'erna.sandoval@pruebaundefined.tv'
      },
      {
        'id': '5a8e2ca0929e874c5ff596cb',
        'Name': 'Kristie',
        'LastName': 'Hancock',
        'email': 'kristie.hancock@pruebaundefined.info'
      },
      {
        'id': '5a8e2ca0286e89f4bb8b4b77',
        'Name': 'Shepherd',
        'LastName': 'Puckett',
        'email': 'shepherd.puckett@pruebaundefined.io'
      }
    ];

    return {users};


  }
}
