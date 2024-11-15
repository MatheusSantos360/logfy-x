import { ZodIssue } from 'zod';
import { bgRed, blue, bold, red, underline } from '../../index';
import logfy from '../logfy';

export const handleConfigErrors = (parseErrors: ZodIssue[]) => {
  const errors: string[] = [];

  parseErrors.forEach((error) => {
    let propertyPath = error.path.join('.'); // Para lidar com propriedades aninhadas
    let message = '';

    switch (error.code) {
      case 'invalid_type':
        if (error.message === 'Required') {
          message = `The property ${underline(blue(propertyPath))} is ${underline('required')}.`;
        } else {
          message = `The property ${underline(blue(propertyPath))} expects ${underline(error.expected)}, but received ${underline(error.received)}.`;
        }
        break;
      case 'invalid_literal':
        message = `The property ${underline(blue(propertyPath))} has an invalid literal value.`;
        break;
      case 'unrecognized_keys':
        message = `The object at ${underline(blue(propertyPath))} contains unrecognized keys: ${error.keys.join(', ')}.`;
        break;
      case 'invalid_union':
        message = `The property ${underline(blue(propertyPath))} is invalid for all provided union types.`;
        break;
      case 'invalid_union_discriminator':
        message = `The property ${underline(blue(propertyPath))} has an invalid discriminator value.`;
        break;
      case 'invalid_enum_value':
        message = `The property ${underline(blue(propertyPath))} expects one of the enum values but received ${error.received}.`;
        break;
      case 'invalid_arguments':
        message = `The arguments at ${underline(blue(propertyPath))} are invalid.`;
        break;
      case 'invalid_return_type':
        message = `The return type at ${underline(blue(propertyPath))} is invalid.`;
        break;
      case 'invalid_date':
        message = `The property ${underline(blue(propertyPath))} is not a valid date.`;
        break;
      case 'custom':
        message = `The property ${underline(blue(propertyPath))} has a custom error: ${error.message}.`;
        break;
      default:
        message = `The property ${underline(blue(propertyPath))} has an error: ${error.message}.`;
    }

    errors.push(message);
  });

  if (errors.length > 0) {
    logfy(`${bgRed(' ❌ ' + bold('ERROR '))} ${bold(red('logfy-x.json'))}`);
    logfy(`${red(bold('>'))} Error(s) on the logfy-x.json`);
    errors.forEach((error) => logfy(`${red(bold('  >'))} ${error}`));
  }
};