import React, { useState } from 'react';
import { View, Text, Modal, TouchableOpacity } from 'react-native';
import { appStyles } from '../styles/appStyles';

interface CustomModalProps {
  visible: boolean;
  onClose: () => void;
  title: string;
  text: string;
}

const CustomModal: React.FC<CustomModalProps> = ({
  visible,
  onClose,
  title,
  text,
}) => {
  return (
    <Modal visible={visible} animationType="fade" transparent={true}>
      <View style={appStyles.modalContainer}>
        <View style={appStyles.modalContent}>
          <Text style={appStyles.modalTitle}>{title}</Text>
          <Text style={appStyles.modalText}>{text}</Text>
          <TouchableOpacity style={appStyles.button} onPress={onClose}>
            <Text style={appStyles.buttonText}>
              Close
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default CustomModal;
