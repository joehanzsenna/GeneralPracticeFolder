import { HStack, Stack, Icon, Text, StackProps, Box } from '@chakra-ui/react'
import React from 'react'
import { MoneyBackIcon, MoneyFreeIcon, MoneySubIcon } from '../icons/Icons';

interface FeatureProps extends StackProps {
    icon: ElementType;
}

function Feature(props: FeatureProps) {
    const { icon, children, ...rest } = props;
    return (
        <HStack {...rest} spacing='24px'>
            <Icon as={icon} boxSize='48px' />
            <Text textAlign='left' fontSize='18px' fontWeight='700'>
                {children}
            </Text>
        </HStack>
    );
}

export function Features () {
    return (
       <Box maxW='1024px' m='auto' pt={{base:'20px', md:'60px'}} pb='32px'>
            <Stack px='48px' spacing='20px' direction={{base:'column', md:'row' }}>
                <Feature icon={MoneyBackIcon}>
                    30 days money back Guarantee
                </Feature>
                <Feature icon={MoneyFreeIcon}>
                    No setup fees 100% hassle-free
                </Feature>
                <Feature icon={MoneySubIcon}>
                    No monthly subscription pay once and for all
                </Feature>
            </Stack>
       </Box>
    )
}