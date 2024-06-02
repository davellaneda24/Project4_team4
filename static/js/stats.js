const teamStats = [
    {
        "team_name": "Atlanta Hawks",
        "assists": 26.579545454545453,
        "blocks": 4.3977272727272725,
        "defReb": 32.26136363636363,
        "fga": 92.10227272727273,
        "fgm": 42.79545454545455,
        "fgp": 0.649,
        "fta": 23.25,
        "ftm": 18.5,
        "ftp": 0.792,
        "games_stats": 88,
        "offReb": 12.306818181818182,
        "pFouls": 18.53409090909091,
        "plusMinus": -205,
        "points avg": 117.70454545454545,
        "steals": 7.681818181818182,
        "totReb": 44.56818181818182,
        "tpa": 37.69318181818182,
        "tpm": 13.613636363636363,
        "tpp": 0.36200000000000004,
        "turnovers": 13.931818181818182,
        "over": 69,
        "under": 67
      },
      {
        "team_name": "Boston Celtics",
        "assists": 26.336633663366335,
        "blocks": 6.297029702970297,
        "defReb": 35.415841584158414,
        "fga": 89.37623762376238,
        "fgm": 43.306930693069305,
        "fgp": 0.63,
        "fta": 20.277227722772277,
        "ftm": 16.297029702970296,
        "ftp": 0.7959999999999999,
        "games_stats": 101,
        "offReb": 10.702970297029703,
        "pFouls": 16.22772277227723,
        "plusMinus": 1124,
        "points avg": 119.0990099009901,
        "steals": 6.881188118811881,
        "totReb": 46.118811881188115,
        "tpa": 42.23762376237624,
        "tpm": 16.18811881188119,
        "tpp": 0.38299999999999995,
        "turnovers": 12.089108910891088,
        "over": 80,
        "under": 88
      },
      {
        "team_name": "Brooklyn Nets",
        "assists": 25.662790697674417,
        "blocks": 5.174418604651163,
        "defReb": 32.81395348837209,
        "fga": 89.05813953488372,
        "fgm": 40.69767441860465,
        "fgp": 0.632,
        "fta": 21.186046511627907,
        "ftm": 16.058139534883722,
        "ftp": 0.763,
        "games_stats": 86,
        "offReb": 11.406976744186046,
        "pFouls": 18.406976744186046,
        "plusMinus": -213,
        "points avg": 110.8953488372093,
        "steals": 6.8023255813953485,
        "totReb": 44.22093023255814,
        "tpa": 36.77906976744186,
        "tpm": 13.44186046511628,
        "tpp": 0.366,
        "turnovers": 13.383720930232558,
        "over": 63,
        "under": 76
      },
      {
        "team_name": "Charlotte Hornets",
        "assists": 24.686046511627907,
        "blocks": 4.604651162790698,
        "defReb": 31.3953488372093,
        "fga": 87.16279069767442,
        "fgm": 39.94186046511628,
        "fgp": 0.638,
        "fta": 18.802325581395348,
        "ftm": 14.720930232558139,
        "ftp": 0.7859999999999999,
        "games_stats": 86,
        "offReb": 9.453488372093023,
        "pFouls": 18,
        "plusMinus": -876,
        "points avg": 106.47674418604652,
        "steals": 6.965116279069767,
        "totReb": 40.848837209302324,
        "tpa": 33.97674418604651,
        "tpm": 11.872093023255815,
        "tpp": 0.348,
        "turnovers": 14.011627906976743,
        "over": 62,
        "under": 69
      },
      {
        "team_name": "Chicago Bulls",
        "assists": 25.078651685393258,
        "blocks": 4.786516853932584,
        "defReb": 32.48314606741573,
        "fga": 89.88764044943821,
        "fgm": 42.056179775280896,
        "fgp": 0.627,
        "fta": 20.730337078651687,
        "ftm": 16.426966292134832,
        "ftp": 0.795,
        "games_stats": 89,
        "offReb": 11.337078651685394,
        "pFouls": 18.95505617977528,
        "plusMinus": -145,
        "points avg": 112.04494382022472,
        "steals": 7.943820224719101,
        "totReb": 43.82022471910113,
        "tpa": 32.168539325842694,
        "tpm": 11.50561797752809,
        "tpp": 0.35700000000000004,
        "turnovers": 12.49438202247191,
        "over": 58,
        "under": 83
      },
      {
        "team_name": "Cleveland Cavaliers",
        "assists": 27.20408163265306,
        "blocks": 4.704081632653061,
        "defReb": 33.326530612244895,
        "fga": 86.66326530612245,
        "fgm": 41.13265306122449,
        "fgp": 0.63,
        "fta": 19.959183673469386,
        "ftm": 15.275510204081632,
        "ftp": 0.762,
        "games_stats": 98,
        "offReb": 9.459183673469388,
        "pFouls": 17.948979591836736,
        "plusMinus": 153,
        "points avg": 110.70408163265306,
        "steals": 7.36734693877551,
        "totReb": 42.785714285714285,
        "tpa": 36.5,
        "tpm": 13.16326530612245,
        "tpp": 0.359,
        "turnovers": 13.673469387755102,
        "over": 67,
        "under": 75
      },
      {
        "team_name": "Dallas Mavericks",
        "assists": 25.19191919191919,
        "blocks": 5.202020202020202,
        "defReb": 33.101010101010104,
        "fga": 88.68686868686869,
        "fgm": 42.343434343434346,
        "fgp": 0.632,
        "fta": 22.656565656565657,
        "ftm": 17.050505050505052,
        "ftp": 0.7490000000000001,
        "games_stats": 99,
        "offReb": 10.04040404040404,
        "pFouls": 18.343434343434343,
        "plusMinus": 236,
        "points avg": 116.01010101010101,
        "steals": 6.818181818181818,
        "totReb": 43.14141414141414,
        "tpa": 38.676767676767675,
        "tpm": 14.272727272727273,
        "tpp": 0.36700000000000005,
        "turnovers": 12.676767676767676,
        "over": 72,
        "under": 86
      },
      {
        "team_name": "Denver Nuggets",
        "assists": 28.848484848484848,
        "blocks": 5.434343434343434,
        "defReb": 33.43434343434343,
        "fga": 88.21212121212122,
        "fgm": 43.24242424242424,
        "fgp": 0.647,
        "fta": 19.585858585858585,
        "ftm": 15.05050505050505,
        "ftp": 0.769,
        "games_stats": 99,
        "offReb": 10.575757575757576,
        "pFouls": 18.262626262626263,
        "plusMinus": 419,
        "points avg": 113.18181818181819,
        "steals": 7.181818181818182,
        "totReb": 44.01010101010101,
        "tpa": 31.666666666666668,
        "tpm": 11.646464646464647,
        "tpp": 0.368,
        "turnovers": 12.767676767676768,
        "over": 77,
        "under": 66
      },
      {
        "team_name": "Detroit Pistons",
        "assists": 25.593023255813954,
        "blocks": 4.755813953488372,
        "defReb": 33.151162790697676,
        "fga": 88.37209302325581,
        "fgm": 40.98837209302326,
        "fgp": 0.648,
        "fta": 21.988372093023255,
        "ftm": 17.186046511627907,
        "ftp": 0.7809999999999999,
        "games_stats": 86,
        "offReb": 10.546511627906977,
        "pFouls": 20.837209302325583,
        "plusMinus": -756,
        "points avg": 110.30232558139535,
        "steals": 6.488372093023256,
        "totReb": 43.69767441860465,
        "tpa": 31.91860465116279,
        "tpm": 11.13953488372093,
        "tpp": 0.349,
        "turnovers": 15.383720930232558,
        "over": 62,
        "under": 70
      },
      {
        "team_name": "Golden State Warriors",
        "assists": 29.102272727272727,
        "blocks": 4.590909090909091,
        "defReb": 34.85227272727273,
        "fga": 91.47727272727273,
        "fgm": 43.53409090909091,
        "fgp": 0.631,
        "fta": 20.454545454545453,
        "ftm": 15.909090909090908,
        "ftp": 0.775,
        "games_stats": 88,
        "offReb": 12.056818181818182,
        "pFouls": 19.59090909090909,
        "plusMinus": 213,
        "points avg": 117.7159090909091,
        "steals": 7.079545454545454,
        "totReb": 46.90909090909091,
        "tpa": 38.875,
        "tpm": 14.738636363636363,
        "tpp": 0.379,
        "turnovers": 14.590909090909092,
        "over": 71,
        "under": 80
      },
      { 
        "team_name": "Houston Rockets",
        "assists": 24.804597701149426,
        "blocks": 4.574712643678161,
        "defReb": 34.264367816091955,
        "fga": 90.86206896551724,
        "fgm": 41.59770114942529,
        "fgp": 0.615,
        "fta": 23.770114942528735,
        "ftm": 18.367816091954023,
        "ftp": 0.769,
        "games_stats": 87,
        "offReb": 11.494252873563218,
        "pFouls": 20.908045977011493,
        "plusMinus": 146,
        "points avg": 114.1264367816092,
        "steals": 8.091954022988507,
        "totReb": 45.758620689655174,
        "tpa": 36,
        "tpm": 12.563218390804598,
        "tpp": 0.349,
        "turnovers": 12.954022988505747,
        "over": 74,
        "under": 59
      },
      {
        "team_name": "Indiana Pacers",
        "assists": 30.528846153846153,
        "blocks": 5.788461538461538,
        "defReb": 31.528846153846153,
        "fga": 92.01923076923077,
        "fgm": 46.26923076923077,
        "fgp": 0.6579999999999999,
        "fta": 20.096153846153847,
        "ftm": 15.64423076923077,
        "ftp": 0.777,
        "games_stats": 104,
        "offReb": 10.134615384615385,
        "pFouls": 21.442307692307693,
        "plusMinus": 239,
        "points avg": 121.20192307692308,
        "steals": 7.355769230769231,
        "totReb": 41.66346153846154,
        "tpa": 35.27884615384615,
        "tpm": 13.01923076923077,
        "tpp": 0.37,
        "turnovers": 12.951923076923077,
        "over": 75,
        "under": 69
      },
      {
        "team_name": "LA Clippers",
        "assists": 25.043478260869566,
        "blocks": 4.989130434782608,
        "defReb": 32.869565217391305,
        "fga": 86.45652173913044,
        "fgm": 41.73913043478261,
        "fgp": 0.62,
        "fta": 22.130434782608695,
        "ftm": 18.152173913043477,
        "ftp": 0.825,
        "games_stats": 92,
        "offReb": 10.206521739130435,
        "pFouls": 18.91304347826087,
        "plusMinus": 229,
        "points avg": 114,
        "steals": 7.782608695652174,
        "totReb": 43.07608695652174,
        "tpa": 32.858695652173914,
        "tpm": 12.369565217391305,
        "tpp": 0.377,
        "turnovers": 13.26086956521739,
        "over": 64,
        "under": 67
      },
      {
        "team_name": "Los Angeles Lakers",
        "assists": 27.936842105263157,
        "blocks": 5.652631578947369,
        "defReb": 34.94736842105263,
        "fga": 87.38947368421053,
        "fgm": 43.27368421052632,
        "fgp": 0.647,
        "fta": 24.13684210526316,
        "ftm": 18.736842105263158,
        "ftp": 0.7709999999999999,
        "games_stats": 95,
        "offReb": 8.2,
        "pFouls": 16.147368421052633,
        "plusMinus": 12,
        "points avg": 116.96842105263158,
        "steals": 7.4526315789473685,
        "totReb": 43.14736842105263,
        "tpa": 31.45263157894737,
        "tpm": 11.68421052631579,
        "tpp": 0.368,
        "turnovers": 14.16842105263158,
        "over": 71,
        "under": 66
      },
      {
        "team_name": "Memphis Grizzlies",
        "assists": 24.82758620689655,
        "blocks": 6.206896551724138,
        "defReb": 31.942528735632184,
        "fga": 88.48275862068965,
        "fgm": 38.55172413793103,
        "fgp": 0.605,
        "fta": 21.103448275862068,
        "ftm": 16.126436781609197,
        "ftp": 0.764,
        "games_stats": 87,
        "offReb": 10.850574712643677,
        "pFouls": 19.160919540229884,
        "plusMinus": -580,
        "points avg": 106.36781609195403,
        "steals": 8.241379310344827,
        "totReb": 42.793103448275865,
        "tpa": 38.195402298850574,
        "tpm": 13.137931034482758,
        "tpp": 0.344,
        "turnovers": 15.183908045977011,
        "over": 63,
        "under": 77
      },
      {
        "team_name": "Miami Heat",
        "assists": 25.48936170212766,
        "blocks": 3.3617021276595747,
        "defReb": 33.03191489361702,
        "fga": 85.67021276595744,
        "fgm": 39.648936170212764,
        "fgp": 0.635,
        "fta": 21.393617021276597,
        "ftm": 17.52127659574468,
        "ftp": 0.8190000000000001,
        "games_stats": 94,
        "offReb": 9.329787234042554,
        "pFouls": 17.52127659574468,
        "plusMinus": 73,
        "points avg": 109.2127659574468,
        "steals": 7.361702127659575,
        "totReb": 42.361702127659576,
        "tpa": 33.90425531914894,
        "tpm": 12.393617021276595,
        "tpp": 0.365,
        "turnovers": 12.946808510638299,
        "over": 73,
        "under": 87
      },
      {
        "team_name": "Milwaukee Bucks",
        "assists": 26.225806451612904,
        "blocks": 4.956989247311828,
        "defReb": 34.81720430107527,
        "fga": 88.61290322580645,
        "fgm": 42.795698924731184,
        "fgp": 0.647,
        "fta": 23.591397849462364,
        "ftm": 18.258064516129032,
        "ftp": 0.772,
        "games_stats": 93,
        "offReb": 9.53763440860215,
        "pFouls": 19.150537634408604,
        "plusMinus": 191,
        "points avg": 117.81720430107526,
        "steals": 6.849462365591398,
        "totReb": 44.354838709677416,
        "tpa": 37.89247311827957,
        "tpm": 13.96774193548387,
        "tpp": 0.369,
        "turnovers": 13.010752688172044,
        "over": 76,
        "under": 71
      },
      {
        "team_name": "Minnesota Timberwolves",
        "assists": 26.55,
        "blocks": 5.77,
        "defReb": 33.85,
        "fga": 84.83,
        "fgm": 41.01,
        "fgp": 0.6409999999999999,
        "fta": 22.89,
        "ftm": 17.8,
        "ftp": 0.774,
        "games_stats": 100,
        "offReb": 9.62,
        "pFouls": 19.26,
        "plusMinus": 665,
        "points avg": 112.53,
        "steals": 7.76,
        "totReb": 43.47,
        "tpa": 33.04,
        "tpm": 12.71,
        "tpp": 0.385,
        "turnovers": 14.02,
        "over": 73,
        "under": 70
      },
      {
        "team_name": "New Orleans Pelicans",
        "assists": 26.58695652173913,
        "blocks": 4.641304347826087,
        "defReb": 33.54347826086956,
        "fga": 87.25,
        "fgm": 41.92391304347826,
        "fgp": 0.629,
        "fta": 22.22826086956522,
        "ftm": 17.119565217391305,
        "ftp": 0.77,
        "games_stats": 92,
        "offReb": 10.543478260869565,
        "pFouls": 18.554347826086957,
        "plusMinus": 259,
        "points avg": 113.1086956521739,
        "steals": 8.434782608695652,
        "totReb": 44.08695652173913,
        "tpa": 32.51086956521739,
        "tpm": 12.141304347826088,
        "tpp": 0.369,
        "turnovers": 13.630434782608695,
        "over": 68,
        "under": 76
      },
      {
        "team_name": "New York Knicks",
        "assists": 24.060606060606062,
        "blocks": 4.232323232323233,
        "defReb": 32,
        "fga": 88.46464646464646,
        "fgm": 40.96969696969697,
        "fgp": 0.618,
        "fta": 22.32323232323232,
        "ftm": 17.282828282828284,
        "ftp": 0.7759999999999999,
        "games_stats": 99,
        "offReb": 12.737373737373737,
        "pFouls": 17.67676767676768,
        "plusMinus": 309,
        "points avg": 112.32323232323232,
        "steals": 7.303030303030303,
        "totReb": 44.73737373737374,
        "tpa": 35.484848484848484,
        "tpm": 13.1010101010101,
        "tpp": 0.371,
        "turnovers": 13.06060606060606,
        "over": 77,
        "under": 67
      },
      {
        "team_name": "Oklahoma City Thunder",
        "assists": 26.77319587628866,
        "blocks": 6.422680412371134,
        "defReb": 33.28865979381443,
        "fga": 89.05154639175258,
        "fgm": 43.90721649484536,
        "fgp": 0.637,
        "fta": 21.54639175257732,
        "ftm": 17.5979381443299,
        "ftp": 0.821,
        "games_stats": 97,
        "offReb": 8.876288659793815,
        "pFouls": 18.77319587628866,
        "plusMinus": 688,
        "points avg": 118.61855670103093,
        "steals": 8.381443298969073,
        "totReb": 42.16494845360825,
        "tpa": 34.41237113402062,
        "tpm": 13.206185567010309,
        "tpp": 0.38299999999999995,
        "turnovers": 12.608247422680412,
        "over": 72,
        "under": 74
      },
      {
        "team_name": "Orlando Magic",
        "assists": 24.35483870967742,
        "blocks": 5.236559139784946,
        "defReb": 31.956989247311828,
        "fga": 84.86021505376344,
        "fgm": 39.96774193548387,
        "fgp": 0.636,
        "fta": 24.473118279569892,
        "ftm": 18.591397849462364,
        "ftp": 0.759,
        "games_stats": 93,
        "offReb": 10.548387096774194,
        "pFouls": 19.849462365591396,
        "plusMinus": 238,
        "points avg": 109.58064516129032,
        "steals": 8.311827956989248,
        "totReb": 42.505376344086024,
        "tpa": 31.817204301075268,
        "tpm": 11.053763440860216,
        "tpp": 0.349,
        "turnovers": 14.720430107526882,
        "over": 68,
        "under": 72
      },
      {
        "team_name": "Philadelphia 76ers",
        "assists": 24.806451612903224,
        "blocks": 5.978494623655914,
        "defReb": 31.774193548387096,
        "fga": 89.13978494623656,
        "fgm": 41.16129032258065,
        "fgp": 0.626,
        "fta": 23.462365591397848,
        "ftm": 19.35483870967742,
        "ftp": 0.821,
        "games_stats": 93,
        "offReb": 11.118279569892474,
        "pFouls": 20.483870967741936,
        "plusMinus": 253,
        "points avg": 114.03225806451613,
        "steals": 8.397849462365592,
        "totReb": 42.89247311827957,
        "tpa": 33.8494623655914,
        "tpm": 12.35483870967742,
        "tpp": 0.36200000000000004,
        "turnovers": 12.13978494623656,
        "over": 70,
        "under": 77
      },
      {
        "team_name": "Phoenix Suns",
        "assists": 26.725274725274726,
        "blocks": 5.846153846153846,
        "defReb": 33.56043956043956,
        "fga": 85.78021978021978,
        "fgm": 42.08791208791209,
        "fgp": 0.635,
        "fta": 23.967032967032967,
        "ftm": 19.384615384615383,
        "ftp": 0.8079999999999999,
        "games_stats": 91,
        "offReb": 10.087912087912088,
        "pFouls": 18.406593406593405,
        "plusMinus": 232,
        "points avg": 115.86813186813187,
        "steals": 7.615384615384615,
        "totReb": 43.64835164835165,
        "tpa": 32.27472527472528,
        "tpm": 12.307692307692308,
        "tpp": 0.379,
        "turnovers": 15.065934065934066,
        "over": 67,
        "under": 79
      },
      {
        "team_name": "Portland Trail Blazers",
        "assists": 23.16470588235294,
        "blocks": 4.352941176470588,
        "defReb": 30.03529411764706,
        "fga": 89.82352941176471,
        "fgm": 39.55294117647059,
        "fgp": 0.63,
        "fta": 20.50588235294118,
        "ftm": 16.141176470588235,
        "ftp": 0.79,
        "games_stats": 85,
        "offReb": 12.588235294117647,
        "pFouls": 20.305882352941175,
        "plusMinus": -767,
        "points avg": 106.72941176470589,
        "steals": 7.8,
        "totReb": 42.62352941176471,
        "tpa": 33.37647058823529,
        "tpm": 11.48235294117647,
        "tpp": 0.345,
        "turnovers": 15.352941176470589,
        "over": 63,
        "under": 74
      },
      {
        "team_name": "Sacramento Kings",
        "assists": 28.258426966292134,
        "blocks": 4.269662921348314,
        "defReb": 33.04494382022472,
        "fga": 91.08988764044943,
        "fgm": 43.06741573033708,
        "fgp": 0.635,
        "fta": 20.752808988764045,
        "ftm": 15.47191011235955,
        "ftp": 0.742,
        "games_stats": 89,
        "offReb": 10.842696629213483,
        "pFouls": 20,
        "plusMinus": 135,
        "points avg": 115.95505617977528,
        "steals": 7.696629213483146,
        "totReb": 43.8876404494382,
        "tpa": 39.60674157303371,
        "tpm": 14.348314606741573,
        "tpp": 0.36200000000000004,
        "turnovers": 13.235955056179776,
        "over": 65,
        "under": 60
      },
      {
        "team_name": "San Antonio Spurs",
        "assists": 29.850574712643677,
        "blocks": 6.413793103448276,
        "defReb": 33.97701149425287,
        "fga": 90.64367816091954,
        "fgm": 41.88505747126437,
        "fgp": 0.631,
        "fta": 20.344827586206897,
        "ftm": 15.758620689655173,
        "ftp": 0.772,
        "games_stats": 87,
        "offReb": 10.344827586206897,
        "pFouls": 17.344827586206897,
        "plusMinus": -508,
        "points avg": 112.19540229885058,
        "steals": 7.287356321839081,
        "totReb": 44.32183908045977,
        "tpa": 36.35632183908046,
        "tpm": 12.666666666666666,
        "tpp": 0.35,
        "turnovers": 15.206896551724139,
        "over": 69,
        "under": 67
      },
      {
        "team_name": "Toronto Raptors",
        "assists": 28.49411764705882,
        "blocks": 4.847058823529411,
        "defReb": 32.07058823529412,
        "fga": 89.47058823529412,
        "fgm": 42.21176470588235,
        "fgp": 0.63,
        "fta": 21.988235294117647,
        "ftm": 16.611764705882354,
        "ftp": 0.757,
        "games_stats": 85,
        "offReb": 10.870588235294118,
        "pFouls": 18.6,
        "plusMinus": -475,
        "points avg": 112.52941176470588,
        "steals": 7.788235294117647,
        "totReb": 42.94117647058823,
        "tpa": 33.082352941176474,
        "tpm": 11.494117647058824,
        "tpp": 0.34600000000000003,
        "turnovers": 14.270588235294118,
        "over": 69,
        "under": 70
      },
      {
        "team_name": "Utah Jazz",
        "assists": 27.174418604651162,
        "blocks": 5.558139534883721,
        "defReb": 33.33720930232558,
        "fga": 89.74418604651163,
        "fgm": 41.906976744186046,
        "fgp": 0.634,
        "fta": 22.825581395348838,
        "ftm": 18.848837209302324,
        "ftp": 0.8270000000000001,
        "games_stats": 86,
        "offReb": 12.19767441860465,
        "pFouls": 18.569767441860463,
        "plusMinus": -399,
        "points avg": 115.51162790697674,
        "steals": 6.604651162790698,
        "totReb": 45.53488372093023,
        "tpa": 36.45348837209303,
        "tpm": 12.848837209302326,
        "tpp": 0.35200000000000004,
        "turnovers": 15.779069767441861,
        "over": 71,
        "under": 70
      },
      {
        "team_name": "Washington Wizards",
        "assists": 27.75294117647059,
        "blocks": 5.117647058823529,
        "defReb": 32.023529411764706,
        "fga": 91.44705882352942,
        "fgm": 42.78823529411765,
        "fgp": 0.632,
        "fta": 20.341176470588234,
        "ftm": 15.611764705882353,
        "ftp": 0.768,
        "games_stats": 85,
        "offReb": 9.211764705882352,
        "pFouls": 19.96470588235294,
        "plusMinus": -767,
        "points avg": 113.5764705882353,
        "steals": 7.7176470588235295,
        "totReb": 41.23529411764706,
        "tpa": 35.705882352941174,
        "tpm": 12.388235294117647,
        "tpp": 0.34600000000000003,
        "turnovers": 13.952941176470588,
        "over": 65,
        "under": 64
      }
]

const teamColors = {
  "Atlanta Hawks": ['#E03A3E', '#C1D32F'],
  "Boston Celtics": ['#007A33', '#BA9653'],
  "Brooklyn Nets": ['#000000', '#FFFFFF'],
  "Charlotte Hornets": ['#1D1160', '#00788C'],
  "Chicago Bulls": ['#CE1141', '#000000'],
  "Cleveland Cavaliers": ['#860038', '#041E42'],
  "Dallas Mavericks": ['#00538C', '#B8C4CA'],
  "Denver Nuggets": ['#0E2240', '#FEC524'],
  "Detroit Pistons": ['#C8102E', '#006BB6'],
  "Golden State Warriors": ['#1D428A', '#FFC72C'],
  "Houston Rockets": ['#CE1141', '#C4CED4'],
  "Indiana Pacers": ['#002D62', '#FDBB30'],
  "LA Clippers": ['#C8102E', '#1D42BA'],
  "Los Angeles Lakers": ['#552583', '#FDB927'],
  "Memphis Grizzlies": ['#5D76A9', '#12173F'],
  "Miami Heat": ['#98002E', '#F9A01B'],
  "Milwaukee Bucks": ['#00471B', '#EEE1C6'],
  "Minnesota Timberwolves": ['#0C2340', '#236192'],
  "New Orleans Pelicans": ['#0C2340', '#C8102E'],
  "New York Knicks": ['#006BB6', '#F58426'],
  "Oklahoma City Thunder": ['#007AC1', '#EF3B24'],
  "Orlando Magic": ['#0077C0', '#C4CED4'],
  "Philadelphia 76ers": ['#006BB6', '#ED174C'],
  "Phoenix Suns": ['#1D1160', '#E56020'],
  "Portland Trail Blazers": ['#E03A3E', '#000000'],
  "Sacramento Kings": ['#5A2D81', '#63727A'],
  "San Antonio Spurs": ['#C4CED4', '#000000'],
  "Toronto Raptors": ['#CE1141', '#000000'],
  "Utah Jazz": ['#002B5C', '#F9A01B'],
  "Washington Wizards": ['#002B5C', '#E31837']
};


let chartInstance = null;

document.getElementById('team-select').addEventListener('change', function () {
  const teamName = this.value;
  updateLogo('team-select', 'logo-div');
  displayTeamStats(teamName);
  createPieChart(teamName);
});

function updateLogo(teamDropdownId, logoDivId) {
    var selectedTeam = document.getElementById(teamDropdownId).value;
    var logoUrl = "";
    switch (selectedTeam) {
        case "Atlanta Hawks":
            logoUrl = "https://content.sportslogos.net/logos/6/220/full/8190_atlanta_hawks-primary-2021.png";
            break;
        case "Boston Celtics":
            logoUrl = "https://content.sportslogos.net/logos/6/213/full/boston_celtics_logo_primary_19977628.png";
            break;
        case "Brooklyn Nets":
            logoUrl = "https://content.sportslogos.net/logos/6/3786/full/brooklyn_nets_logo_alternate_20138452.png";
            break;
        case "Charlotte Hornets":
            logoUrl = "https://upload.wikimedia.org/wikipedia/en/thumb/c/c4/Charlotte_Hornets_%282014%29.svg/440px-Charlotte_Hornets_%282014%29.svg.png";
            break;
        case "Chicago Bulls":
            logoUrl = "https://content.sportslogos.net/logos/6/221/full/chicago_bulls_logo_primary_19672598.png";
            break;
        case "Cleveland Cavaliers":
            logoUrl = "https://content.sportslogos.net/logos/6/222/full/cleveland_cavaliers_logo_primary_2023_sportslogosnet-5369.png";
            break;
        case "Dallas Mavericks":
            logoUrl = "https://content.sportslogos.net/logos/6/228/full/3463_dallas_mavericks-primary-2018.png";
            break;
        case "Denver Nuggets":
            logoUrl = "https://upload.wikimedia.org/wikipedia/en/thumb/7/76/Denver_Nuggets.svg/400px-Denver_Nuggets.svg.png";
            break;
        case "Detroit Pistons":
            logoUrl = "https://content.sportslogos.net/logos/6/223/full/detroit_pistons_logo_primary_20185710.png";
            break;
        case "Golden State Warriors":
            logoUrl = "https://content.sportslogos.net/logos/6/235/full/3152_golden_state_warriors-primary-2020.png";
            break;
        case "Houston Rockets":
            logoUrl = "https://content.sportslogos.net/logos/6/230/full/6830_houston_rockets-primary-2020.png";
            break;
        case "Indiana Pacers":
            logoUrl = "https://upload.wikimedia.org/wikipedia/en/thumb/1/1b/Indiana_Pacers.svg/400px-Indiana_Pacers.svg.png";
            break;
        case "LA Clippers":
            logoUrl = "https://content.sportslogos.net/logos/6/236/full/los_angeles_clippers_logo_primary_2025_sportslogosnet-5542.png";
            break;
        case "Los Angeles Lakers":
            logoUrl = "https://content.sportslogos.net/logos/6/237/full/los_angeles_lakers_logo_primary_2024_sportslogosnet-7324.png";
            break;
        case "Memphis Grizzlies":
            logoUrl = "https://upload.wikimedia.org/wikipedia/en/thumb/f/f1/Memphis_Grizzlies.svg/380px-Memphis_Grizzlies.svg.png";
            break;
        case "Miami Heat":
            logoUrl = "https://upload.wikimedia.org/wikipedia/en/thumb/f/fb/Miami_Heat_logo.svg/400px-Miami_Heat_logo.svg.png";
            break;
        case "Milwaukee Bucks":
            logoUrl = "https://content.sportslogos.net/logos/6/225/full/milwaukee_bucks_logo_primary_20165763.png";
            break;
        case "Minnesota Timberwolves":
            logoUrl = "https://upload.wikimedia.org/wikipedia/en/thumb/c/c2/Minnesota_Timberwolves_logo.svg/400px-Minnesota_Timberwolves_logo.svg.png";
            break;
        case "New Orleans Pelicans":
            logoUrl = "https://content.sportslogos.net/logos/6/4962/full/new_orleans_pelicans_logo_primary_2024_sportslogosnet-9292.png";
            break;
        case "New York Knicks":
            logoUrl = "https://content.sportslogos.net/logos/6/216/full/new_york_knicks_logo_primary_2024_sportslogosnet-7170.png";
            break;
        case "Oklahoma City Thunder":
            logoUrl = "https://upload.wikimedia.org/wikipedia/en/thumb/5/5d/Oklahoma_City_Thunder.svg/400px-Oklahoma_City_Thunder.svg.png";
            break;
        case "Orlando Magic":
            logoUrl = "https://content.sportslogos.net/logos/6/217/full/orlando_magic_logo_primary_20117178.png";
            break;
        case "Philadelphia 76ers":
            logoUrl = "https://upload.wikimedia.org/wikipedia/en/thumb/0/0e/Philadelphia_76ers_logo.svg/400px-Philadelphia_76ers_logo.svg.png";
            break;
        case "Phoenix Suns":
            logoUrl = "https://content.sportslogos.net/logos/6/238/full/phoenix_suns_logo_primary_20143696.png";
            break;
        case "Portland Trail Blazers":
            logoUrl = "https://upload.wikimedia.org/wikipedia/en/thumb/2/21/Portland_Trail_Blazers_logo.svg/440px-Portland_Trail_Blazers_logo.svg.png";
            break;
        case "Sacramento Kings":
            logoUrl = "https://upload.wikimedia.org/wikipedia/en/thumb/c/c7/SacramentoKings.svg/360px-SacramentoKings.svg.png";
            break;
        case "San Antonio Spurs":
            logoUrl = "https://upload.wikimedia.org/wikipedia/en/thumb/a/a2/San_Antonio_Spurs.svg/480px-San_Antonio_Spurs.svg.png";
            break;
        case "Toronto Raptors":
            logoUrl = "https://content.sportslogos.net/logos/6/227/full/7024_toronto_raptors-primary-2021.png";
            break;
        case "Utah Jazz":
            logoUrl = "https://content.sportslogos.net/logos/6/234/full/utah_jazz_logo_primary_2023_sportslogosnet-8513.png";
            break;
        case "Washington Wizards":
            logoUrl = "https://upload.wikimedia.org/wikipedia/en/thumb/0/02/Washington_Wizards_logo.svg/400px-Washington_Wizards_logo.svg.png";
            break;
        default:
            logoUrl = "";
    }
    document.getElementById(logoDivId).innerHTML = logoUrl ? "<img src='" + logoUrl + "' alt='" + selectedTeam + " Logo'>" : "";
}

function displayTeamStats(teamName) {
    const team = teamStats.find(team => team.team_name === teamName);

    if (team) {
        document.getElementById('team-name').textContent = `${team.team_name} Stats`;
        document.getElementById('points-per-game').textContent = team["points avg"].toFixed(2);
        document.getElementById('assists-per-game').textContent = team.assists.toFixed(2);
        document.getElementById('rebounds-per-game').textContent = team.totReb.toFixed(2);
        document.getElementById('steals-per-game').textContent = team.steals.toFixed(2);
        document.getElementById('blocks-per-game').textContent = team.blocks.toFixed(2);
        document.getElementById('fgm-per-game').textContent = (team.fgp * 100).toFixed(2) + '%';
        document.getElementById('three-point-per-game').textContent = (team.tpp * 100).toFixed(2) + '%';
        document.getElementById('turnovers-per-game').textContent = team.turnovers.toFixed(2);
    } else {
        document.getElementById('team-name').textContent = "Team Stats";
        document.getElementById('points-per-game').textContent = "N/A";
        document.getElementById('assists-per-game').textContent = "N/A";
        document.getElementById('rebounds-per-game').textContent = "N/A";
        document.getElementById('steals-per-game').textContent = "N/A";
        document.getElementById('blocks-per-game').textContent = "N/A";
        document.getElementById('fgm-per-game').textContent = "N/A";
        document.getElementById('three-point-per-game').textContent = "N/A";
        document.getElementById('turnovers-per-game').textContent = "N/A";
    }
}

function createPieChart(teamName) {
  const team = teamStats.find(team => team.team_name === teamName);

  if (team) {
      const ctx = document.getElementById('overUnderChart').getContext('2d');
      const data = {
          labels: ['Over', 'Under'],
          datasets: [{
              data: [team.over, team.under],
              backgroundColor: teamColors[teamName]
          }]
      };
      const options = {
          responsive: true,
          plugins: {
              legend: {
                  position: 'top',
                  labels: {
                      font: {
                          size: 24,
                      },
                      color: 'white'
                  }
              },
              tooltip: {
                callbacks: {
                    label: function(context) {
                        let label = context.label || '';
                        if (label) {
                            label += ': ';
                        }
                        label += context.raw;
                        return label;
                    }
                }
            },
            datalabels: {
                formatter: (value, context) => {
                    const dataset = context.chart.data.datasets[0];
                    const total = dataset.data.reduce((acc, curr) => acc + curr, 0);
                    const percentage = (value / total * 100).toFixed(2) + '%';
                    return percentage;
                },
                color: '#ffffff', // Set the color of the percentage text
                font: {
                    size: 14, // Set the size of the percentage text
                },
                anchor: 'center',
                align: 'center'
            }
        }
    };

    if (chartInstance) {
        chartInstance.destroy(); // Destroy the previous chart instance
    }

    chartInstance = new Chart(ctx, {
        type: 'pie',
        data: data,
        options: options,
        plugins: [ChartDataLabels]
    });
}
}