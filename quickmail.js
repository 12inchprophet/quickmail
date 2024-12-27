import React from '@blocklet/pages-kit/builtin/react';
import { Button, Box } from '@blocklet/pages-kit/builtin/mui/material';
import { Icon } from '@blocklet/pages-kit/builtin/iconify/react';

const EmailButton = ({
  email = 'example@example.com',
  buttonText = 'Contact Us',
  boxBackgroundColor = 'transparent',
  buttonBackgroundColor = '#0078D7',
  buttonHoverColor = '#005A9E',
  buttonTextColor = '#FFFFFF',
  buttonIcon = 'mdi:email-outline',
  tooltipText = 'Click to send an email',
  size = 'medium', // small, medium, or large
  isRectangular = false, // Toggle for button shape
}) => {
  const sizeStyles = {
    small: {
      box: { height: '10vh', width: '200px', padding: '10px' },
      button: { width: '150px', height: '40px', fontSize: '14px' },
    },
    medium: {
      box: { height: '15vh', width: '300px', padding: '20px' },
      button: { width: '200px', height: '50px', fontSize: '18px' },
    },
    large: {
      box: { height: '20vh', width: '400px', padding: '30px' },
      button: { width: '250px', height: '60px', fontSize: '22px' },
    },
  };

  const styles = sizeStyles[size] || sizeStyles.medium;

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 'auto',
        position: 'relative',
        height: styles.box.height,
        width: styles.box.width,
        backgroundColor: boxBackgroundColor,
        padding: styles.box.padding,
        borderRadius: '12px',
        boxShadow: 'none',
      }}
      title={tooltipText}
    >
      <Button
        variant="contained"
        href={`mailto:${email}`}
        startIcon={<Icon icon={buttonIcon} />}
        aria-label={`Send an email to ${email}`}
        sx={{
          backgroundColor: buttonBackgroundColor,
          color: buttonTextColor,
          fontSize: styles.button.fontSize,
          width: styles.button.width,
          height: styles.button.height,
          borderRadius: isRectangular ? '8px' : '50px',
          padding: '0 24px',
          textTransform: 'none',
          boxShadow: 'none',
          '&:hover': {
            backgroundColor: buttonHoverColor,
            opacity: 0.9,
          },
          transition: 'background-color 0.2s ease, opacity 0.2s ease',
        }}
      >
        {buttonText}
      </Button>
    </Box>
  );
};

export default EmailButton;
