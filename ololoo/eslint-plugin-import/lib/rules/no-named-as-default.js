'use strict';

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

var _coreGetExports = require('../core/getExports');

var _coreGetExports2 = _interopRequireDefault(_coreGetExports);

var _importDeclaration = require('../importDeclaration');

var _importDeclaration2 = _interopRequireDefault(_importDeclaration);

module.exports = function (context) {
  function checkDefault(nameKey, defaultSpecifier) {
    var declaration = (0, _importDeclaration2['default'])(context);

    var imports = _coreGetExports2['default'].get(declaration.source.value, context);
    if (imports == null) return;

    if (imports.errors.length) {
      context.report({
        node: declaration.source,
        message: 'Parse errors in imported module ' + ('\'' + declaration.source.value + '\'.')
      });
      return;
    }

    if (imports.hasDefault && imports.named.has(defaultSpecifier[nameKey].name)) {

      context.report(defaultSpecifier, 'Using exported name \'' + defaultSpecifier[nameKey].name + '\' as identifier for default export.');
    }
  }
  return {
    'ImportDefaultSpecifier': checkDefault.bind(null, 'local'),
    'ExportDefaultSpecifier': checkDefault.bind(null, 'exported')
  };
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ydWxlcy9uby1uYW1lZC1hcy1kZWZhdWx0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OEJBQW9CLG9CQUFvQjs7OztpQ0FDVixzQkFBc0I7Ozs7QUFFcEQsTUFBTSxDQUFDLE9BQU8sR0FBRyxVQUFVLE9BQU8sRUFBRTtBQUNsQyxXQUFTLFlBQVksQ0FBQyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUU7QUFDL0MsUUFBSSxXQUFXLEdBQUcsb0NBQWtCLE9BQU8sQ0FBQyxDQUFBOztBQUU1QyxRQUFJLE9BQU8sR0FBRyw0QkFBUSxHQUFHLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsT0FBTyxDQUFDLENBQUE7QUFDNUQsUUFBSSxPQUFPLElBQUksSUFBSSxFQUFFLE9BQU07O0FBRTNCLFFBQUksT0FBTyxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUU7QUFDekIsYUFBTyxDQUFDLE1BQU0sQ0FBQztBQUNiLFlBQUksRUFBRSxXQUFXLENBQUMsTUFBTTtBQUN4QixlQUFPLEVBQUUsNkNBQ0ksV0FBVyxDQUFDLE1BQU0sQ0FBQyxLQUFLLFNBQUk7T0FDMUMsQ0FBQyxDQUFBO0FBQ0YsYUFBTTtLQUNQOztBQUVELFFBQUksT0FBTyxDQUFDLFVBQVUsSUFDbEIsT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUU7O0FBRXJELGFBQU8sQ0FBQyxNQUFNLENBQUMsZ0JBQWdCLEVBQzdCLHdCQUF3QixHQUFHLGdCQUFnQixDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksR0FDekQsc0NBQXNDLENBQUMsQ0FBQTtLQUUxQztHQUNGO0FBQ0QsU0FBTztBQUNMLDRCQUF3QixFQUFFLFlBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLE9BQU8sQ0FBQztBQUMxRCw0QkFBd0IsRUFBRSxZQUFZLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxVQUFVLENBQUM7R0FDOUQsQ0FBQTtDQUNGLENBQUEiLCJmaWxlIjoibm8tbmFtZWQtYXMtZGVmYXVsdC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBFeHBvcnRzIGZyb20gJy4uL2NvcmUvZ2V0RXhwb3J0cydcbmltcG9ydCBpbXBvcnREZWNsYXJhdGlvbiBmcm9tICcuLi9pbXBvcnREZWNsYXJhdGlvbidcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY29udGV4dCkge1xuICBmdW5jdGlvbiBjaGVja0RlZmF1bHQobmFtZUtleSwgZGVmYXVsdFNwZWNpZmllcikge1xuICAgIHZhciBkZWNsYXJhdGlvbiA9IGltcG9ydERlY2xhcmF0aW9uKGNvbnRleHQpXG5cbiAgICB2YXIgaW1wb3J0cyA9IEV4cG9ydHMuZ2V0KGRlY2xhcmF0aW9uLnNvdXJjZS52YWx1ZSwgY29udGV4dClcbiAgICBpZiAoaW1wb3J0cyA9PSBudWxsKSByZXR1cm5cblxuICAgIGlmIChpbXBvcnRzLmVycm9ycy5sZW5ndGgpIHtcbiAgICAgIGNvbnRleHQucmVwb3J0KHtcbiAgICAgICAgbm9kZTogZGVjbGFyYXRpb24uc291cmNlLFxuICAgICAgICBtZXNzYWdlOiBgUGFyc2UgZXJyb3JzIGluIGltcG9ydGVkIG1vZHVsZSBgICtcbiAgICAgICAgICAgICAgICAgYCcke2RlY2xhcmF0aW9uLnNvdXJjZS52YWx1ZX0nLmAsXG4gICAgICB9KVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgaWYgKGltcG9ydHMuaGFzRGVmYXVsdCAmJlxuICAgICAgICBpbXBvcnRzLm5hbWVkLmhhcyhkZWZhdWx0U3BlY2lmaWVyW25hbWVLZXldLm5hbWUpKSB7XG5cbiAgICAgIGNvbnRleHQucmVwb3J0KGRlZmF1bHRTcGVjaWZpZXIsXG4gICAgICAgICdVc2luZyBleHBvcnRlZCBuYW1lIFxcJycgKyBkZWZhdWx0U3BlY2lmaWVyW25hbWVLZXldLm5hbWUgK1xuICAgICAgICAnXFwnIGFzIGlkZW50aWZpZXIgZm9yIGRlZmF1bHQgZXhwb3J0LicpXG5cbiAgICB9XG4gIH1cbiAgcmV0dXJuIHtcbiAgICAnSW1wb3J0RGVmYXVsdFNwZWNpZmllcic6IGNoZWNrRGVmYXVsdC5iaW5kKG51bGwsICdsb2NhbCcpLFxuICAgICdFeHBvcnREZWZhdWx0U3BlY2lmaWVyJzogY2hlY2tEZWZhdWx0LmJpbmQobnVsbCwgJ2V4cG9ydGVkJyksXG4gIH1cbn1cbiJdfQ==