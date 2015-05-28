angular.module('formatDecimal', [])
    .filter('formatDecimal', function() {
        return function(value) {
            var abbr = ['k', 'M', 'B', 'T'],
                i = abbr.length - 1,
                result,
				decimal;

            for (i; i>=0; i--) {
                var size = Math.pow(10, (i+1)*3);

                if (size <= value) {
                    if (value % size < 100) {
                        result = (value/size).toFixed(0) + abbr[i];
                    } else {
						decimal = String(value/size).split('.')[1].substr(0, 1);
                        result = (value/size).toFixed(0) + '.' + decimal + abbr[i];
                    }
                    break;
                } else {
                    result = value;
                }
            }

            return result;
        };
    });