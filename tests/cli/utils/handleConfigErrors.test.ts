import { describe, test, expect, vi, beforeEach } from 'vitest';
import { ZodIssue } from 'zod';
import { handleConfigErrors } from '../../../src/cli/functions/handleConfigErrors';
import { configFileName } from '../../../package.json';  // Certifique-se de que o caminho esteja correto

// Mocking console.log to test output
const mockConsoleLog = vi.spyOn(console, 'log').mockImplementation(() => {});

describe('handleConfigErrors', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  test('should handle invalid_type errors with required message', () => {
    const parseErrors: ZodIssue[] = [
      {
        code: 'invalid_type',
        expected: 'string',
        received: 'undefined',
        path: ['property'],
        message: 'Required',
      },
    ];

    handleConfigErrors(parseErrors);

    expect(mockConsoleLog).toHaveBeenCalledWith(expect.stringContaining(`ERROR`));
    expect(mockConsoleLog).toHaveBeenCalledWith(expect.stringContaining(`Error(s) on ${configFileName}`));
    expect(mockConsoleLog).toHaveBeenCalledWith(expect.stringContaining('The property'));
  });

  test('should handle unrecognized_keys errors', () => {
    const parseErrors: ZodIssue[] = [
      {
        code: 'unrecognized_keys',
        keys: ['unexpectedKey'],
        path: [],
        message: 'Unrecognized keys',
      },
    ];

    handleConfigErrors(parseErrors);

    expect(mockConsoleLog).toHaveBeenCalledWith(expect.stringContaining('contains unrecognized keys'));
  });

  test('should log the correct config file name with error', () => {
    const parseErrors: ZodIssue[] = [
      {
        code: 'invalid_type',
        expected: 'string',
        received: 'number',
        path: ['property'],
        message: 'Invalid type',
      },
    ];

    handleConfigErrors(parseErrors);

    expect(mockConsoleLog).toHaveBeenCalledWith(expect.stringContaining(configFileName));
  });
});